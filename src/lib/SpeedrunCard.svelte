<script lang="ts">
	
	let {
		speedrun,
		elementId,
		url,
	}: {
		speedrun: Speedrun;
		elementId: string;
		url: string;
	} = $props()
	
	import { speedruns } from '../data/speedruns.ts'
	import { games } from '../data/games.ts'
	import { speedrunTimeToString } from '../functions/speedrun-time-to-string.ts'
	import Card from './Card.svelte'
	
	let game = $derived(
		games.find(g => g.id == speedrun.gameId),
	)!
	let category = $derived(
		game.categories.find(c => c.id == speedrun.categoryId),
	)!
	
	let tagNames = $derived.by(() => {
		
		const tagNames = [
			`blogpost`,
		]
		
		if(speedrun == speedruns[0]){
			tagNames.unshift(`newest`)
		}
		
		return tagNames
		
	})
	
</script>

<Card
	{url}
	id={elementId}
	title={game.name}
	content={`${category.name} in ${speedrunTimeToString(speedrun.time)}`}
	{tagNames}
	imageUrl="/speedrun-icon.png"
	date={speedrun.date}
/>