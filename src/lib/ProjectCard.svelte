<script>
	
	import { projects } from 'data/projects.js'
	import Card from './Card.svelte'
	
	export let project = projects[0]
	export let elementId = `project-${project.id}`
	export let url = `/projects/${project.id}`
	
	const tagNames = [
		`project`,
	]
	
	if(project == projects[0]){
		tagNames.unshift(`newest`)
	}
	
</script>

<Card
	{url}
	id={elementId}
	title={project.title}
	content={project.introduction}
	{tagNames}
	imageUrl="/projects/{project.id}.png"
	date="{project.datePosted}"
/>