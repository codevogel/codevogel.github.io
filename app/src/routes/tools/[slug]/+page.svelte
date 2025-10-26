<script lang="ts">
	import type { Plugin } from 'svelte-exmarkdown';
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';
	import rehypeRaw from 'rehype-raw';
	import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
	import { createHighlighterCoreSync } from 'shiki/core';
	import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
	import ts from 'shiki/langs/typescript.mjs';
	import gdscript from 'shiki/langs/gdscript.mjs';
	import kanagawa from 'shiki/themes/kanagawa-wave.mjs';
	import rehypeSlug from 'rehype-slug';
	import { getScrollContainerContext } from '$lib/context';
	import { scrollToTopOfContainer } from '$lib/common/scroll.js';
	import { pushState } from '$app/navigation';

	let scrollContainerContext = getScrollContainerContext();

	let { data } = $props();

	let readme = $derived(data.readme);

	const shikiPlugin = {
		rehypePlugin: [
			rehypeShikiFromHighlighter,
			createHighlighterCoreSync({
				themes: [kanagawa],
				langs: [ts, gdscript],
				engine: createJavaScriptRegexEngine()
			}),
			{ theme: 'kanagawa-wave' }
		]
	} satisfies Plugin;

	const rawPlugin = {
		rehypePlugin: [rehypeRaw]
	} satisfies Plugin;

	const slugPlugin = {
		rehypePlugin: [rehypeSlug]
	} satisfies Plugin;

	const plugins: Plugin[] = [gfmPlugin(), shikiPlugin, rawPlugin, slugPlugin];


	function interceptLinkClicks(e: MouseEvent & { currentTarget: EventTarget & HTMLDivElement; }) {
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
				pushState((`#${hash}`), {});
			}

		}
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_interactive_supports_focus -->
<div class="mx-8 prose snap-none dark:prose-invert" onclick={(e) => interceptLinkClicks(e)} role="link">
	<Markdown md={readme} {plugins} />
</div>
