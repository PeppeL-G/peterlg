import adapter from '@sveltejs/adapter-static'
import { mdsvex } from "mdsvex"
import rehypeTransformPlugin from './src/rehype-plugins/rehype-transform-plugin.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			data: 'src/data',
			functions: 'src/functions',
			assets: 'src/assets',
		},
	},
	extensions: [
		'.svelte',
		'.md',
	],
	preprocess: mdsvex({
		extensions: [
			'.svelte',
			'.md',
		],
		rehypePlugins: [
			rehypeTransformPlugin,
		],
	}),
}

export default config
