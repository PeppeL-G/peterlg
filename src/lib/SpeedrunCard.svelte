<script>
	
	import { speedruns } from 'data/speedruns.js'
	import { games } from 'data/games.js'
	import { speedrunTimeToString } from 'functions/speedrun-time-to-string.js'
	import Card from './Card.svelte'
	
	export let speedrun = speedruns[0]
	export let elementId = `speedrun-${speedrun.id}`
	export let url = `/speedruns/${speedrun.id}`
	
	const game = games.find(g => g.id == speedrun.gameId)
	const category = game.categories.find(c => c.id == speedrun.categoryId)
	
	const tagNames = [
		`speedrun`,
	]
	
	if(speedrun == speedruns[0]){
		tagNames.unshift(`newest`)
	}
	
</script>

<Card
	{url}
	id={elementId}
	title={game.name}
	content={`${category.name} in ${speedrunTimeToString(speedrun.time)}`}
	{tagNames}
	imageUrl="/speedrun-icon.png"
	date="{speedrun.date}"
/>