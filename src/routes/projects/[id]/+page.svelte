<script>
	
	import { page } from '$app/stores';
	import { projects } from 'data/projects.js'
	import Image from '$lib/Image.svelte'
	
	$: project = projects.find(
		p => p.id == $page.params.id
	)
	
</script>

{#if !project}
	
	<h1>Project not found</h1>
	<p>No project with the provided id exists.</p>
	
{:else}
	
	<h1>{project.title}</h1>
	<div class="image">
		<Image
			src={`/projects/${project.id}.png`}
			alt="Project."
			id="main"
		/>
	</div>
	<p class="introduction">
		{project.introduction}
		<span class="posted">
			Posted 
			<time datetime={project.datePosted}>
				{project.datePosted}
			</time>
		</span>
	</p>
	<p>{@html project.description}</p>
	
{/if}

<style>
	
	.introduction{
		font-weight: bold;
	}
	.posted{
		display: block;
		font-style: italic;
		margin-top: 0.3em;
	}
	
	.image{
		float: right;
	}
	
</style>