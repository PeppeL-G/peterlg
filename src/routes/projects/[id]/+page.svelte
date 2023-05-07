<script>
	
	import { base } from '$app/paths'
	import { page } from '$app/stores';
	import { projects } from 'data/projects.js'
	
	$: project = projects.find(
		p => p.id == $page.params.id
	)
	
</script>

{#if !project}
	
	<h1>Project not found</h1>
	<p>No project with the provided id exists.</p>
	
{:else}
	
	<h1>{project.title}</h1>
	<img
		src={`${base}/projects/${project.id}.png`}
		alt="Project."
	>
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
	
	img{
		float: right;
	}
	
</style>