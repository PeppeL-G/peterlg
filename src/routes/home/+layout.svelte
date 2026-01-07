<script lang="ts">
	
	let {
		children,
	}: {
		children: Snippet;
	} = $props()
	
	import { projects } from "../../data/projects.ts"
	import { speedruns } from "../../data/speedruns.ts"
	import { blogposts } from "../../data/blogposts.ts"
	import BlogpostCard from "$lib/BlogpostCard.svelte"
	import ProjectCard from "$lib/ProjectCard.svelte"
	import SpeedrunCard from "$lib/SpeedrunCard.svelte"
	import Cards from "$lib/Cards.svelte"
	import type { Snippet } from "svelte"
	
	const newestProject = projects[0]
	const newestBlogpost = blogposts[0]
	const newestSpeedrun = speedruns[0]
	
</script>

<p>Welcome to <code>peterlg.se</code>! Here you can read about various things Peter Larsson-Green has done.</p>

<h2>Happened Lately</h2>

<Cards>
	
	<BlogpostCard
		blogpost={newestBlogpost}
		elementId="newest-blogpost"
		url="/home/newest-blogpost/"
	/>
	
	<ProjectCard
		project={newestProject}
		elementId="newest-project"
		url="/home/newest-project/"
	/>
	
	<SpeedrunCard
		speedrun={newestSpeedrun}
		elementId="newest-speedrun"
		url="/home/newest-speedrun/"
	/>
	
</Cards>

{@render children()}