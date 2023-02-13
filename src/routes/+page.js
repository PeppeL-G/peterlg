import { projects } from 'data/projects.js'

/** @type {import('./$types').PageLoad} */
export function load(){
	
	const newestProject = projects[0]
	
	return {
		newestProject,
	}
	
}