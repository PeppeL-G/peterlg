import { projects } from 'data/projects.js'

/** @type {import('./$types').PageLoad} */
export function load() {
	
	return {
		projects,
	}
	
}