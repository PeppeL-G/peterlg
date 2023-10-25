import adapter from '@sveltejs/adapter-static'
import { mdsvex } from "mdsvex"

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
	}),
}

export default config
