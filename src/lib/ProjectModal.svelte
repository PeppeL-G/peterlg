<script lang="ts">
	
	let {
		projectId,
		closeUrl,
		originId,
	}: {
		projectId: string;
		closeUrl: string;
		originId: string;
	} = $props()
	
	import FullscreenableImage from '$lib/FullscreenableImage.svelte'
	import Modal from '$lib/Modal.svelte'
	import { projects } from '../data/projects.ts'
	import { getProjectContentComponent } from '../functions/get-project-content-component.ts'
	
	let project = $derived(
		projects.find(
			p => p.id == projectId,
		),
	)
	
</script>

<Modal
	{closeUrl}
	originId={originId != `` ? originId : `project-${project?.id}`}
	title={project?.title ?? `Project not found`}
>
	
	{#if project}
		
		<div class="project">
			
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
				
				{#await getProjectContentComponent(project)}
					<p>Loading content...</p>
				{:then ProjectContentComponent} 
					<ProjectContentComponent />
				{:catch}
					<p>Error: Could not load the content of the project.</p>
				{/await}
				
			</div>
			
		</div>
		
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