<script>
	
	import { blogposts } from "data/blogposts.js"
	import BlogpostCard from "$lib/BlogpostCard.svelte"
	import Cards from "$lib/Cards.svelte"
	
</script>

<div class="page">
	
	<p>
		It doesn't happen often, but sometimes I have something useful to share with the world. You can read about those things in my blogposts.
	</p>
	
	<Cards>
		
		{#each blogposts as blogpost}
			
			<BlogpostCard
				{blogpost}
			/>
			
		{/each}
		
	</Cards>
	
</div>

<slot />