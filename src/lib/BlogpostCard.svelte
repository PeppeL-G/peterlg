<script>
	
	import { blogposts } from 'data/blogposts.js'
	import Card from './Card.svelte'
	
	export let blogpost = blogposts[0]
	export let url = ``
	
	const tagNames = [
		`blogpost`,
	]
	
	if(blogpost == blogposts[0]){
		tagNames.push(`newest`)
	}
	
</script>

<Card
	{url}
	id="blogpost-{blogpost.id}"
	title={blogpost.title}
	content={blogpost.summary}
	{tagNames}
	imageUrl="/blogposts/{blogpost.id}.png"
	date="{blogpost.dateWritten}"
/>