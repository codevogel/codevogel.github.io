<script lang="ts">
	import FindMeOn from '$lib/components/ui/find-me-on.svelte';
	import Section from '$lib/components/ui/section.svelte';
	import { CopyIcon, FileUserIcon } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';

	let renderTopLevelLinksSection: boolean = $state(true);
	let inlineLinksSection: HTMLElement | undefined = $state();

	// Hide the inline links section if it is not visible in the viewport
	// e.g. on small screens, the inline section is hidden by css
	// on larger screens, it is visible because of md:flex
	// We need to stop rendering the top-level section as
	// the layout will not apply the 'only section' styles correctly
	// if one of the sections still exists but is hidden
	function hideSectionIfInlineSectionIsHidden() {
		if (!inlineLinksSection) {
			renderTopLevelLinksSection = true;
			return;
		}
		renderTopLevelLinksSection = !(inlineLinksSection.getBoundingClientRect().top > 0);
	}

	function attachInlineLinksSection(node: HTMLElement) {
		inlineLinksSection = node;
		hideSectionIfInlineSectionIsHidden();
	}
</script>

<svelte:window onresize={() => hideSectionIfInlineSectionIsHidden()} />

<Section class="items-center">
	<div class="prose text-center md:text-lg dark:prose-invert">
		<h1 class="mt-4">Contact</h1>
		<p>I am currently <span class="text-primary">open to work</span>.</p>
		<p>
			<span class="font-bold text-primary italic">Are you interested in working together?</span
			><br />Then, I would love to hear from you!<br />Please don't hesitate to contact me at:
		</p>
		<button
			class="text-md mx-auto flex flex-row items-center justify-between gap-x-4 rounded-2xl bg-primary px-4 py-3 font-mono font-extrabold text-background hover:bg-foreground hover:text-background"
			onclick={() => {
				navigator.clipboard.writeText('contact@codevogel.com');
				toast(
					"✅ My e-mail address has been copied to your clipboard. I'm excited to hear from you!"
				);
			}}
		>
			contact<span class="hidden">-dont-spam-me</span>@codevogel.com
			<CopyIcon size={16} />
		</button>
		<p>
			Feel free to contact me for anything else as well.
			<br />Looking forward to your message!
		</p>
		<p class="md:hidden">
			<span class="font-bold text-primary italic">Are you a recruiter?</span><br />Then swipe
			down to see my resume 😉
		</p>

		<div
			class="not-prose mt-8 hidden flex-col items-center justify-center gap-y-4 md:flex"
			{@attach attachInlineLinksSection}
		>
			{@render links(false)}
		</div>
	</div>
</Section>

{#if renderTopLevelLinksSection}
	<Section class="not-prose items-center justify-center gap-y-8">
		{@render links(true)}
	</Section>
{/if}

{#snippet links(topLevel: boolean)}
	<FindMeOn {topLevel} />
	<h2>My Resume</h2>
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a href="/pdf/resume-kamiel-de-visser.pdf">
		<FileUserIcon size={48} class="hover:stroke-primary" />
	</a>
{/snippet}
