<script>
	
	import { page } from '$app/stores';
	import { blogposts } from 'data/blogposts.js'
	
	$: blogpost = blogposts.find(
		b => b.id == $page.params.id
	)
	
</script>

{#if blogpost}
	
	<h1>{blogpost.title}</h1>
	<img
		src={`/blogposts/${blogpost.id}.png`}
		alt="Blogpost."
	>
	<p class="introduction">
		{blogpost.summary}
		<span class="posted">
			Posted 
			<time datetime={blogpost.dateWritten}>
				{blogpost.dateWritten}
			</time>
		</span>
	</p>
	
	<svelte:component this={blogpost.ContentComponent} />
	
{:else}
	
	<h1>Blogpost not found</h1>
	<p>Sorry, but no blogpost with the provided id exists.</p>
	
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
		max-width: 50%;
		margin: 3%;
	}
	
</style>