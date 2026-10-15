import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createRehypeTransformersPlugin } from './src/rehype-plugins/create-rehype-transformers-plugin.ts';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			extensions: ['.svelte', '.md'],
			preprocess: [
				vitePreprocess(),
				mdsvex({
					extensions: ['.md'],
					rehypePlugins: [createRehypeTransformersPlugin],
					smartypants: false
				})
			],
			adapter: adapter(),
			prerender: { entries: [`/`, `/sopor/`] }
		})
	],
	server: { open: true, host: true }
});
