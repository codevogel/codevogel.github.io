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
	const plugins: Plugin[] = [gfmPlugin(), { rehypePlugin: [rehypeRaw] }, shikiPlugin];
</script>

<div class="mx-8 prose snap-none dark:prose-invert">
	<Markdown md={readme} {plugins} />
</div>
