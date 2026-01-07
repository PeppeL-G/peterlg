import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { createRehypeTransformersPlugin } from './src/rehype-plugins/create-rehype-transformers-plugin.ts'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	
	extensions: [
		'.svelte',
		'.md',
	],
	
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: [
				'.md',
			],
			rehypePlugins: [
				createRehypeTransformersPlugin,
			],
			smartypants: false,
		}),
	],
	
	kit: {
		
		adapter: adapter(),
		
		prerender: {
			entries: [
				`/`,
				`/sopor/`,
			],
		},
		
	},
	
}

export default config
