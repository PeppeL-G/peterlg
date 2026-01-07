<script lang="ts">
	
	let {
		speedrunId,
		closeUrl,
		originId,
	}: {
		speedrunId: number;
		closeUrl: string;
		originId: string;
	} = $props()
	
	import Modal from '$lib/Modal.svelte'
	import { speedrunTimeToString } from '../functions/speedrun-time-to-string.ts'
	import { games } from '../data/games.ts'
	import { speedruns } from '../data/speedruns.ts'
	
	let speedrun = $derived(
		speedruns.find(
			s => s.id == speedrunId,
		),
	)!
	
	let game = $derived(
		games.find(
			g => g.id == speedrun.gameId
		),
	)!
	
</script>

<Modal
	{closeUrl}
	originId={originId != `` ? originId : `speedrun-${speedrun.id}`}
	title={game?.name ?? `Speedrun not found`}
>
	
	{#if !speedrun}
		
		<p>No speedrun with the given id exists.</p>
		
	{:else}
		
		<p>A {game.consoleName} game.</p>
		
		{#each game.categories as category}
			
			<h2>{category.name}</h2>
			<p>{category.description}</p>
			
			{@const gameSpeedruns = speedruns.filter(
				s => s.gameId == game.id && s.categoryId == category.id
			)}
			
			<div class="speedruns">
				<table border={1}>
					<thead>
						<tr>
							<th>Date Played</th>
							<th>Time</th>
							<th>Played On</th>
						</tr>
					</thead>
					<tbody>
						{#each gameSpeedruns as speedrun}
							<tr title={speedrun.comment}>
								<td>{speedrun.date}</td>
								<td>
									<code>
										{speedrunTimeToString(speedrun.time)}
									</code>
								</td>
								<td>{speedrun.consoleName}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			
		{/each}
		
	{/if}
	
</Modal>