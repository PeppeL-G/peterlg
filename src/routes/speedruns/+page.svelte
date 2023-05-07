<script>
	import { speedrunTimeToString } from 'functions/speedrun-time-to-string.js'
	import { games } from 'data/games.js'
	import { speedruns } from 'data/speedruns.js'
</script>
<h1>Speedruns</h1>
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

<div class="speedruns">
	<table border={1}>
		<thead>
			<tr>
				<th>Date Played</th>
				<th>Game</th>
				<th>Category</th>
				<th>Time</th>
				<th>Console</th>
				<th>Played On</th>
			</tr>
		</thead>
		<tbody>
			{#each speedruns as speedrun}
				
				{@const game = games.find(g => g.id == speedrun.gameId)}
				{@const category = game.categories.find(c => c.id == speedrun.categoryId)}
				
				<tr title={speedrun.comment}>
					<td>{speedrun.date}</td>
					<td>
						<a href="/speedruns/{game.id}">
							{game.name}
						</a>
					</td>
					<td>{category.name}</td>
					<td>
						<code>
							{speedrunTimeToString(speedrun.time)}
						</code>
					</td>
					<td>{game.consoleName}</td>
					<td>{speedrun.consoleName}</td>
				</tr>
				
			{/each}
		</tbody>
	</table>
</div>

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
