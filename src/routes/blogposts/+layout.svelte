<script lang="ts">
	
	let {
		children,
	}: {
		children: Snippet;
	} = $props()
	
	import { blogposts } from "../../data/blogposts.ts"
	import BlogpostCard from "$lib/BlogpostCard.svelte"
	import Cards from "$lib/Cards.svelte"
	import type { Snippet } from "svelte"
	
</script>

<div class="page">
	
	<p>
		It doesn't happen often, but sometimes I have something useful to share with the world. You can read about those things in my blogposts.
	</p>
	
	<Cards>
		
		{#each blogposts as blogpost}
			
			<BlogpostCard
				{blogpost}
				url={`/blogposts/${blogpost.id}`}
				elementId={`blogpost-${blogpost.id}`}
			/>
			
		{/each}
		
	</Cards>
	
</div>

{@render children()}