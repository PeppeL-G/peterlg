<script lang="ts">
	
	let {
		children,
	}: {
		children: Snippet;
	} = $props()
	
	import { speedrunTimeToString } from '../../functions/speedrun-time-to-string.ts'
	import { games } from '../../data/games.ts'
	import { speedruns } from '../../data/speedruns.ts'
	import SubLink from '$lib/SubLink.svelte'
	import { createPinchAttachment } from '../../attachments/create-pinch-attachment.ts'
	import type { Snippet } from 'svelte'
	
	const minTableScalePercentages = 25
	const maxTableScalePercentages = 120
	
	let tableScalePercentages = $state(maxTableScalePercentages)
	
	function onPinch(pinchFactor: number){
		
		tableScalePercentages *= pinchFactor
		
		if(tableScalePercentages < minTableScalePercentages){
			tableScalePercentages = minTableScalePercentages
		}
		
		if(maxTableScalePercentages < tableScalePercentages){
			tableScalePercentages = maxTableScalePercentages
		}
		
	}
	
</script>

<p>
	I sometimes play video games, and since I have a quite bad memory I somewhere
	want to have a list of which games I have finished. And what better place than
	on this website? So on this page I add an entry each time I finish a game. And
	some games I enjoy playing so much that I play them multiple times, and then
	they are even more fun to speedrun them, so here you can also see my records.
	Be impressed! 😎
</p>

<p>
	The time <code>??:??:??</code> means that I finished the game without measuring
	how long time it took, most likely because I played it a little bit each day
	over multiple days (sometimes several weeks).
</p>

<div
	class="table"
	{@attach createPinchAttachment({onPinch})}
	style:font-size="{tableScalePercentages}%"
>
	
	<div class="headerRow">
		<div>Date Played</div>
		<span class="separator"></span>
		<div>Game</div>
		<span class="separator"></span>
		<div>Category</div>
		<span class="separator"></span>
		<div>Time</div>
		<span class="separator"></span>
		<div>Console</div>
		<span class="separator"></span>
		<div>Played On</div>
	</div>
	
	{#each speedruns as speedrun}
		
		{@const game = games.find(g => g.id == speedrun.gameId)!}
		{@const category = game.categories.find(c => c.id == speedrun.categoryId)!}
		
		<SubLink
			href="/speedruns/{speedrun.id}"
			id="speedrun-{speedrun.id}"
			scaleFactor={1.03}
		>
			<div>{speedrun.date}</div>
			<span class="separator"></span>
			<div>{game.name}</div>
			<span class="separator"></span>
			<div>{category.name}</div>
			<span class="separator"></span>
			<code>
				{speedrunTimeToString(speedrun.time)}
			</code>
			<span class="separator"></span>
			<div>{game.consoleName}</div>
			<span class="separator"></span>
			<div>{speedrun.consoleName}</div>
		</SubLink>
		
	{/each}
	
</div>

{@render children()}

<style>
	
	.table{
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: repeat(auto, 11);
		column-gap: 0.75em;
		
		padding: 0 0.8em;
		white-space: nowrap;
		overflow: auto;
		
	}
	
	.table .headerRow{
		font-weight: bold;
		background-color: rgb(210, 210, 210);
		position: sticky;
		top: 0;
	}
	
	.table > :global(*){
		display: grid;
		grid-column: span 11;
		background-color: white;
		padding: 1em;
		border-radius: 1em;
		margin: 0.25em 0;
		grid-template-columns: subgrid;
	}
	
	.separator::before{
		content: "|";
	}
	
</style>
