<script>
	
	import Card from "$lib/Card.svelte"
	
	/** @type {import('./$types').PageData} */
	export let data
	
	const {
		newestProject,
	} = data
	
</script>

<h1>Welcome!</h1>
<p>Welcome to <code>peterlg.se</code>! Here you can read about various things I, Peter Larsson-Green, have done.</p>

<div id="newest">
	
	<h2>Newest updates</h2>
	
	<div class="items">
		
		<div>
			<Card
				url="/projects/{newestProject.id}"
				title={newestProject.title}
				content={newestProject.introduction}
				tagNames={['newest', 'project']}
				imageUrl={`/projects/${newestProject.id}.png`}
				date={newestProject.datePosted}
			/>
		</div>
		
	</div>
	
	
</div>

<style>
	
	#newest h2{
		text-align: center;
	}
	
	#newest .items{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
	#newest .items div{
		flex-basis: 30%;
	}
	
	
	
</style>