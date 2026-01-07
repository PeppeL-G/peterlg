<script lang="ts">

	let {
		children,
	}: {
		children: Snippet;
	} = $props()
	
	import Cards from '$lib/Cards.svelte'
	import ProjectCard from '$lib/ProjectCard.svelte'
	import type { Snippet } from 'svelte'
	import { projects } from '../../data/projects'
	
</script>

<p>Here you can see some of the projects I've been/am involved in.</p>

<Cards>
	
	{#each projects as project}
		
		<ProjectCard
			{project}
			url={`/projects/${project.id}`}
			elementId={`project-${project.id}`}
		/>
		
	{/each}
	
</Cards>

{@render children()}