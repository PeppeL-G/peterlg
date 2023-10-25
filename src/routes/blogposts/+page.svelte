<script>
	
	import { blogposts } from "data/blogposts.js"
	import Card from "$lib/Card.svelte"
	
	const newestBlogpost = blogposts[0]
	
</script>

<h1>Blogposts</h1>
<p>
	It doesn't happen often, but sometimes I have something useful to share with the world. You can read about those things in my blogposts.
</p>

<div id="blogposts">
	
	{#each blogposts as blogpost}
		<Card
			title={blogpost.title}
			content={blogpost.summary}
			date={blogpost.dateWritten}
			url={`/blogposts/${blogpost.id}`}
			tagNames={
				(blogpost == newestBlogpost ? ['newest'] : []).concat(['blogpost'])
			}
			imageUrl={`/blogposts/${blogpost.id}.png`}
		/>
	{/each}
	
</div>

<style>
	
	#blogposts{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
	#blogposts > :global(*){
		flex-basis: 30%;
	}
	
</style>