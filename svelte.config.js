import adapter from '@sveltejs/adapter-static'
import { mdsvex } from "mdsvex"
import openExternalAnchorsInNewWindowPlugin from './src/rehype-plugins/open-external-anchors-in-new-window-plugin.js'

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
			openExternalAnchorsInNewWindowPlugin,
		],
	}),
}

export default config
