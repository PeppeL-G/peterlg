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
		/>
		
	{/each}
	
</Cards>

<slot />