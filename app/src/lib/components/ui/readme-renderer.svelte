<script lang="ts">
	// --- svelte imports ---
	import { page } from '$app/state';
	import { afterNavigate, pushState } from '$app/navigation';
	import { getScrollContainerContext } from '$lib/context';
	import { scrollToTopOfContainer } from '$lib/utils/scroll';
	import type { Project, WorkStatus } from '$lib/assets/data/projects';

	// --- exmarkdown imports ---
	import type { Plugin } from 'svelte-exmarkdown';
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';

	// --- rehype imports ---
	// plugins
	import rehypeRaw from 'rehype-raw';

	import rehypeSlug from 'rehype-slug';

	import { ShikiHighlighter } from '$lib/utils/get-shiki-highlighter-instance';
	import rehypeShikiFromHighlighter from '@shikijs/rehype/core';

	import type { RootContent, Element } from 'hast';
	import rehypeInsert, {
		createBlockquote,
		type RehypeInsertOptions
	} from '$lib/rehype/rehype-insert';

	let { readme, project }: { readme: string; project: Project } = $props();

	let scrollContainerContext = getScrollContainerContext();

	afterNavigate(() => {
		if (page.url.hash) {
			return;
		}
		const scrollContainer = scrollContainerContext();
		if (scrollContainer) {
			scrollToTopOfContainer(scrollContainer, scrollContainer);
		}
	});

	const shikiPlugin = {
		rehypePlugin: [
			rehypeShikiFromHighlighter,
			ShikiHighlighter.getInstance(),
			{ theme: 'kanagawa-wave' }
		]
	} satisfies Plugin;

	const rawPlugin = {
		rehypePlugin: [rehypeRaw]
	} satisfies Plugin;

	const slugPlugin = {
		rehypePlugin: [rehypeSlug]
	} satisfies Plugin;

	function getStatusMessage(status: WorkStatus): string {
		switch (status) {
			case 'abandoned':
				return "🪦 A beloved project has met its end. Though abandoned, I'm keeping it here as a small monument to the ideas it once held. Perhaps one day, [it might rise again](/contact). 🪦";
			case 'active':
				return '🚧 This project is still under construction. I am currently actively building it, so stay tuned! 🚧';
			case 'postponed':
				return "⏳ This project is taking a break. It's still on my roadmap, but construction is on hold while I focus on other projects. ⏳";
			case 'icebox':
				return "🧊 This project is taking a break. It's in the icebox for now, but I hope to revisit it when the time feels right. 🧊";
		}
	}

	const projectStatusOptions: RehypeInsertOptions<WorkStatus> = {
		position: {
			type: 'after',
			selector: (node: RootContent) =>
				node.type === 'element' && (node as Element).tagName === 'h1'
		},
		content: (status) => {
			return createBlockquote(getStatusMessage(status));
		},
		data: project.workStatus
	};

	const projectStatusPlugin = {
		rehypePlugin: [rehypeInsert, projectStatusOptions]
	} satisfies Plugin;

	const plugins: Plugin[] = [gfmPlugin(), shikiPlugin, rawPlugin, slugPlugin, projectStatusPlugin];

	function interceptLinkClicks(e: MouseEvent & { currentTarget: EventTarget & HTMLElement }) {
		const a = (e.target as HTMLElement).closest('a');
		if (a) {
			const hash = a.getAttribute('href')?.split('#')[1];
			if (hash) {
				e.preventDefault();
				const targetElement = document.getElementById(hash);
				const scrollContainer = scrollContainerContext();
				if (targetElement && scrollContainer) {
					scrollToTopOfContainer(scrollContainer, targetElement);
				}
				// eslint-disable-next-line svelte/no-navigation-without-resolve
				pushState(`#${hash}`, {});
			}
		}
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_interactive_supports_focus -->
<section
	class="mx-8 my-16 prose snap-none dark:prose-invert"
	onclick={(e) => interceptLinkClicks(e)}
	role="link"
>
	<Markdown md={readme} {plugins} />
</section>
