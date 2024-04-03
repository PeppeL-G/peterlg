<script>
	
	import { projects } from 'data/projects.js'
	import Card from './Card.svelte'
	
	export let project = projects[0]
	export let url = ``
	
	const tagNames = [
		`project`,
	]
	
	if(project == projects[0]){
		tagNames.push(`newest`)
	}
	
</script>

<Card
	{url}
	id="project-{project.id}"
	title={project.title}
	content={project.introduction}
	{tagNames}
	imageUrl="/projects/{project.id}.png"
	date="{project.datePosted}"
/>