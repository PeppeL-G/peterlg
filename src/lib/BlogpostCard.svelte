<script>
	
	import { blogposts } from 'data/blogposts.js'
	import Card from './Card.svelte'
	
	export let blogpost = blogposts[0]
	export let elementId = `blogpost-${blogpost.id}`
	export let url = `/blogposts/${blogpost.id}`
	
	const tagNames = [
		`blogpost`,
	]
	
	if(blogpost == blogposts[0]){
		tagNames.unshift(`newest`)
	}
	
</script>

<Card
	{url}
	id={elementId}
	title={blogpost.title}
	content={blogpost.summary}
	{tagNames}
	imageUrl="/blogposts/{blogpost.id}.png"
	date="{blogpost.dateWritten}"
/>