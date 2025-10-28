<script>
	import FindMeOn from '$lib/components/ui/find-me-on.svelte';
	import { CopyIcon, FileUserIcon } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
</script>

<div class="prose text-center dark:prose-invert prose-headings:my-2 prose-p:my-2">
	<h1>Contact</h1>
	<p>I am currently <span class="text-primary">open to work</span>.</p>
	<p>
		<span class="font-bold text-primary italic">Are you interested in working together?</span><br
		/>Then, I would love to hear from you!<br />Please don't hesitate to contact me at:
	</p>
	<button
		class="text-md gap-x-4 mx-auto flex flex-row items-center justify-between rounded-2xl bg-primary px-4 py-3 font-mono font-extrabold text-background hover:bg-foreground hover:text-background"
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
	<p>
		<span class="font-bold text-primary italic">Are you a recruiter?</span><br />Then swipe down
		to see my resume 😉
	</p>
</div>

<div class="flex flex-col items-center justify-center gap-y-8">
	<FindMeOn />
	<h1>My Resume</h1>
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a href="/pdf/resume-kamiel-de-visser.pdf">
		<FileUserIcon size={48} class="hover:stroke-primary" />
	</a>
</div>
