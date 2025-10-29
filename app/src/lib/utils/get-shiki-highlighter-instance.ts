import { createHighlighterCoreSync, type HighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import ts from 'shiki/langs/typescript.mjs';
import gdscript from 'shiki/langs/gdscript.mjs';
import kanagawa from 'shiki/themes/kanagawa-wave.mjs';

export class ShikiHighlighter {
	private static instance: HighlighterCore | null = null;

	public static getInstance(): HighlighterCore {
		if (this.instance === null) {
			this.instance = createHighlighterCoreSync({
				themes: [kanagawa],
				langs: [ts, gdscript],
				engine: createJavaScriptRegexEngine()
			});
		}
		return this.instance;
	}

	public static dispose(): void {
		if (this.instance !== null) {
			this.instance.dispose();
			this.instance = null;
		}
	}
}
