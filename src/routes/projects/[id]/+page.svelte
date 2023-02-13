<script>
	
	/** @type {import('./$types').PageData} */
	export let data
	
	const {
		project,
	} = data
	
</script>

<h1>{project.title}</h1>
<img
	src={`/projects/${project.id}.png`}
	alt="Project."
>
<p class="introduction">
	{project.introduction}
	<span class="posted">
		Posted 
		<time datetime={project.datePosted}>
			{project.datePosted}
		</time>
	</span>
</p>
<p>{@html project.description}</p>

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
	}
	
</style>