import { redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export function load() {
	return redirect(
		301,
		`/home/`,
	)
}