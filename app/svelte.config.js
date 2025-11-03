import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const toolsPathExpr = /\/tools\/.*/;
const gamesPathExpr = /\/games\/.*/;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				if (toolsPathExpr.test(path) || gamesPathExpr.test(path)) {
					console.warn(`Pre-rendering error for ${path} (referrer: ${referrer}): ${message}`);
					return;
				}
				throw new Error(`Pre-rendering failed for ${path} (referrer: ${referrer}): ${message}`);
			},
			handleMissingId: ({ path, referrers, message }) => {
				if (toolsPathExpr.test(path) || gamesPathExpr.test(path)) {
					console.warn(
						`Missing ID during pre-rendering for ${path} (referrers: ${referrers.join(', ')}): ${message}`
					);
					return;
				}
				throw new Error(
					`Missing ID during pre-rendering for ${path} (referrers: ${referrers.join(', ')}): ${message}`
				);
			}
		},

		adapter: adapter()
	}
};

export default config;
