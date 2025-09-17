import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { getHighlighter } from 'shiki';

import rehypeToc from 'rehype-toc';
import rehypeSlug from 'rehype-slug';

/** @type {import('mdsvex').MdsvexOptions}/ */
const mdsvexOptions = {
   extensions: ['.svx'],
   highlight: {
      highlighter: async (code, lang = 'text') => {
         const highlighter = await getHighlighter({
            themes: ['poimandres'],
            langs: ['javascript', 'typescript', 'bash', 'yaml', 'gdscript'] // include all needed languages here
         });

         const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));
         return `{@html \`${html}\` }`;
      }
   },
   rehypePlugins: [rehypeSlug, rehypeToc] // in order!
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
   // Consult https://kit.svelte.dev/docs/integrations#preprocessors
   // for more information about preprocessors
   preprocess: [preprocess(), vitePreprocess(), mdsvex(mdsvexOptions)],

   kit: {
      // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
      // If your environment is not supported or you settled on a specific environment, switch out the adapter.
      // See https://kit.svelte.dev/docs/adapters for more information about adapters.
      adapter: adapter()
   },
   paths: {
      // Change the first '' to your repository name if you are deploying a project site.
      base: process.env.NODE_ENV === 'production' ? '' : ''
   },
   extensions: ['.svelte', '.svx']
};

export default config;
