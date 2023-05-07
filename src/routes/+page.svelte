<script>
	
	import Card from "$lib/Card.svelte"
	import { projects } from "data/projects.js"
	import { speedruns } from "data/speedruns.js"
	import { games } from "data/games";
	import { speedrunTimeToString } from "functions/speedrun-time-to-string.js"
	
	const newestProject = projects[0]
	const newestSpeedrun = speedruns[0]
	const newestSpeedrunGame = games.find(
		g => g.id == newestSpeedrun.gameId,
	)
	const newestSpeedrunCategory = newestSpeedrunGame.categories.find(
		c => c.id == newestSpeedrun.categoryId,
	)
	
</script>

<h1>Welcome!</h1>
<p>Welcome to <code>peterlg.se</code>! Here you can read about various things I, Peter Larsson-Green, have done.</p>

<div id="newest">
	
	<h2>Newest updates</h2>
	
	<div class="items">
		
		<div>
			<Card
				url="/speedruns/{newestSpeedrunGame.id}"
				title={newestSpeedrunGame.name}
				content="Speedrun {newestSpeedrunCategory.name} in {speedrunTimeToString(newestSpeedrun.time)}."
				tagNames={['newest', 'speedrun']}
				imageUrl={`/speedrun-icon.png`}
				date={newestSpeedrun.date}
			/>
		</div>
		
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
		justify-content: space-evenly;
	}
	
	#newest .items div{
		flex-basis: 30%;
		flex-grow: 0;
	}
	
</style>