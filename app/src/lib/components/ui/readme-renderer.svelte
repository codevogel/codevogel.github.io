<script lang="ts">
	// --- svelte imports ---
	import { page } from '$app/state';
	import { afterNavigate, pushState } from '$app/navigation';
	import { getScrollContainerContext } from '$lib/context';
	import { scrollToTopOfContainer } from '$lib/common/scroll.js';
	import type { Project } from '$lib/server/data/projects';

	// --- exmarkdown imports ---
	import type { Plugin } from 'svelte-exmarkdown';
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';

	// --- rehype imports ---
	// plugins
	import rehypeRaw from 'rehype-raw';

	import rehypeSlug from 'rehype-slug';

	import rehypeProjectStatus from '$lib/rehype/insert-project-status';

	import { ShikiHighlighter } from '$lib/utils/get-shiki-highlighter-instance';
	import rehypeShikiFromHighlighter from '@shikijs/rehype/core';

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

	const projectStatusPlugin = {
		rehypePlugin: [rehypeProjectStatus, project.workStatus]
	} satisfies Plugin;

	const plugins: Plugin[] = [gfmPlugin(), shikiPlugin, rawPlugin, slugPlugin, projectStatusPlugin];

	function interceptLinkClicks(e: MouseEvent & { currentTarget: EventTarget & HTMLDivElement }) {
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
<div
	class="mx-8 my-16 prose snap-none dark:prose-invert"
	onclick={(e) => interceptLinkClicks(e)}
	role="link"
>
	<Markdown md={readme} {plugins} />
</div>
