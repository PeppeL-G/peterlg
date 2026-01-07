<script lang="ts">
	
	let {
		blogpostId,
		closeUrl,
		originId,
	}: {
		blogpostId: string;
		closeUrl: string;
		originId: string;
	} = $props()
	
	import FullscreenableImage from '$lib/FullscreenableImage.svelte'
	import Modal from '$lib/Modal.svelte'
	import { blogposts } from '../data/blogposts.ts'
	import { getBlogpostContentComponent } from '../functions/get-blogpost-content-component.ts'
	
	let blogpost = $derived(
		blogposts.find(
			b => b.id == blogpostId,
		),
	)
	
</script>

<Modal
	{closeUrl}
	originId={originId}
	title={blogpost?.title ?? `Blogpost not found`}
>
	
	{#if blogpost}
		
		<div class="blogpost">
			
			<p class="introduction">
				{blogpost.summary}
			</p>
			
			<div class="image">
				<FullscreenableImage
					src={`/blogposts/${blogpost.id}.png`}
					alt="Blogpost."
				/>
			</div>
			
			<div class="posted">
				Written 
				<time datetime={blogpost.dateWritten}>
					{blogpost.dateWritten}
				</time>
			</div>
			
			<div class="content">
				{#await getBlogpostContentComponent(blogpost)}
					<p>Loading...</p>
				{:then BlogpostContentComponent}
					<BlogpostContentComponent />
				{:catch}
					<p>Error: Could not load the content in the blogpost.</p>
				{/await}
			</div>
			
		</div>
		
	{:else}
		
		<p>Sorry, but no blogpost with the provided id exists.</p>
		
	{/if}
	
</Modal>

<style>
	
	.blogpost{
		display: grid;
		grid-template-columns: 1fr minmax(auto, 50%);
		grid-template-rows: auto auto auto;
		place-items: center;
		gap: 0.75em;
		max-width: 100%;
	}
	
	.introduction{
		grid-column: 1 / span 1;
		grid-row: 1 / span 1;
		font-weight: bold;
		margin-bottom: 0;
	}
	
	.image{
		grid-column: 2 / span 1;
		grid-row: 1 / span 1;
		max-width: 100%;
		border: 1px solid black;
	}
	
	.posted{
		grid-column: 1 / span 2;
		grid-row: 2 / span 1;
		display: block;
		font-style: italic;
	}
	
	.content{
		grid-column: 1 / span 2;
		grid-row: 3 / span 1;
		max-width: 100%;
	}
	
</style>