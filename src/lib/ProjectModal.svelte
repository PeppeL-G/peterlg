<script>
	
	import { projects } from 'data/projects.js'
	import FullscreenableImage from '$lib/FullscreenableImage.svelte'
	import Modal from '$lib/Modal.svelte'
	
	export let id = ``
	export let closeUrl = `/projects`
	export let originId = ``
	
	const project = projects.find(p => p.id == id)
	
</script>

<Modal
	{closeUrl}
	originId={originId != `` ? originId : `project-${project?.id}`}
	title={project?.title ?? `Project not found`}
>
	
	{#if project}
		
		<article class="project">
			
			<p class="introduction">
				{project.introduction}
			</p>
			
			<div class="image">
				<FullscreenableImage
					src={`/projects/${project.id}.png`}
					alt="Project."
				/>
			</div>
			
			<div class="posted">
				Posted 
				<time datetime={project.datePosted}>
					{project.datePosted}
				</time>
			</div>
			
			<div class="content">
				<svelte:component this={project.DescriptionComponent} />
			</div>
			
		</article>
		
	{:else}
		
		<p>Sorry, but no project with the provided id exists.</p>
		
	{/if}
	
</Modal>

<style>
	
	.project{
		display: grid;
		grid-template-columns: 1fr minmax(auto, 50%);
		grid-template-rows: auto auto auto;
		place-items: center;
		gap: 0.75em;
	}
	
	.introduction{
		grid-row: 2;
		grid-column: 1;
		font-weight: bold;
	}
	
	.image{
		grid-row: 2;
		grid-column: 2;
		max-width: 100%;
		border: 1px solid black;
	}
	
	.posted{
		grid-row: 3;
		grid-column: 1 / span 2;
		display: block;
		font-style: italic;
		margin-top: 0.3em;
	}
	
	.content{
		grid-row: 4;
		grid-column: 1 / span 2;
		max-width: 100%;
	}
	
</style>