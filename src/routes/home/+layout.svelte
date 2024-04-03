<script>
	
	import { projects } from "data/projects.js"
	import { speedruns } from "data/speedruns.js"
	import { blogposts } from "data/blogposts.js"
	import BlogpostCard from "$lib/BlogpostCard.svelte"
	import ProjectCard from "$lib/ProjectCard.svelte"
	import SpeedrunCard from "$lib/SpeedrunCard.svelte"
	import Cards from "$lib/Cards.svelte"
	
	const newestProject = projects[0]
	const newestBlogpost = blogposts[0]
	const newestSpeedrun = speedruns[0]
	
</script>

<p>Welcome to <code>peterlg.se</code>! Here you can read about various things Peter Larsson-Green has done.</p>

<h2>Happened Lately</h2>

<Cards>
	
	<BlogpostCard
		blogpost={newestBlogpost}
		url="/home/newest-blogpost/"
	/>
	
	<ProjectCard
		project={newestProject}
		url="/home/newest-project/"
	/>
	
	<SpeedrunCard
		speedrun={newestSpeedrun}
		url="/home/newest-speedrun/"
	/>
	
</Cards>

<slot />