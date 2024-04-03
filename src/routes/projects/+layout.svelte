<script>
	
	import Cards from '$lib/Cards.svelte'
	import ProjectCard from '$lib/ProjectCard.svelte'
	import { projects } from 'data/projects'
	
</script>

<p>Here you can see some of the projects I've been/am involved in.</p>

<Cards>
	
	{#each projects as project}
		
		<ProjectCard
			{project}
			url="/projects/{project.id}"
		/>
		
	{/each}
	
</Cards>

<slot />