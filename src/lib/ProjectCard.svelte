<script lang="ts">
	
	let {
		project,
		elementId,
		url,
	}: {
		project: Project;
		elementId: string;
		url: string;
	} = $props()
	
	import { projects } from '../data/projects.ts'
	import Card from './Card.svelte'
	
	let tagNames = $derived.by(() => {
		
		const tagNames = [
			`blogpost`,
		]
		
		if(project == projects[0]){
			tagNames.unshift(`newest`)
		}
		
		return tagNames
		
	})
	
</script>

<Card
	{url}
	id={elementId}
	title={project.title}
	content={project.introduction}
	{tagNames}
	imageUrl="/projects/{project.id}.png"
	date={project.datePosted}
/>