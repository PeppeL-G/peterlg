import { projects } from 'data/projects.js'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	
	const project = projects.find(p => p.id == params.id)
	
	if(!project){
		throw error(404, 'Not found');
	}
	
	return {
		project,
	}
	
}