<script>
	
	import Card from '$lib/Card.svelte'
	
	/** @type {import('./$types').PageData} */
	export let data
	
	const {
		projects,
	} = data
	
	const newestProject = projects[0]
	
</script>

<h1>Projects</h1>
<p>Here you can see some of the projects I've been/am involved in.</p>

<div id="projects">
	
	{#each projects as project}
		
		<Card
			url="/projects/{project.id}"
			title={project.title}
			content={project.introduction}
			tagNames={
				(project == newestProject ? ['newest'] : []).concat(['project'])
			}
			imageUrl={`/projects/${project.id}.png`}
			date={project.datePosted}
		/>
		
	{/each}
	
</div>

<style>
	
	#projects{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
	#projects > :global(*){
		flex-basis: 30%;
	}
	
</style>