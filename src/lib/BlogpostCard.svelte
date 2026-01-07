<script lang="ts">
	
	let {
		blogpost,
		elementId,
		url,
	}: {
		blogpost: Blogpost;
		elementId: string;
		url: string;
	} = $props()
	
	import { blogposts } from '../data/blogposts.ts'
	import Card from './Card.svelte'
	
	let tagNames = $derived.by(() => {
		
		const tagNames = [
			`blogpost`,
		]
		
		if(blogpost == blogposts[0]){
			tagNames.unshift(`newest`)
		}
		
		return tagNames
		
	})
	
</script>

<Card
	{url}
	id={elementId}
	title={blogpost.title}
	content={blogpost.summary}
	{tagNames}
	imageUrl="/blogposts/{blogpost.id}.png"
	date={blogpost.dateWritten}
/>