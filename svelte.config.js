import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			data: 'src/data',
			assets: 'src/assets',
		},
	},
}

export default config
