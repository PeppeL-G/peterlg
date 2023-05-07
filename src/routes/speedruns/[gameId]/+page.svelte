<script>
	import { speedrunTimeToString } from 'functions/speedrun-time-to-string.js';
	
	import { games } from 'data/games.js'
	import { speedruns } from 'data/speedruns.js'
	import { page } from '$app/stores'
	
	$: game = games.find(
		g => g.id == $page.params.gameId,
	)
	
</script>

{#if !game}
	
	<h1>Game not found</h1>
	<p>No game with the given id exists.</p>
	
{:else}
	
	<h1>{game.name}</h1>
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

<style>
	.speedruns {
		white-space: nowrap;
		overflow: auto;
		text-align: center;
	}

	.speedruns table {
		margin: 0 auto;
	}

	.speedruns th,
	.speedruns td {
		padding: 0.25em;
	}
</style>