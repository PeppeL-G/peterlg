<script>
	/** @type {import('./$types').PageData} */
	export let data;

	const { speedruns } = data;

	function speedrunTimeToString(time) {
		if (time.hours == 999) {
			return `??:??:??`;
		}

		const hh = time.hours.toString().padStart(2, "0");
		const mm = time.minutes.toString().padStart(2, "0");
		const ss = time.seconds.toString().padStart(2, "0");

		return `${hh}:${mm}:${ss}`;
	}
</script>

<h1>Speedruns</h1>
<p>
	I sometimes play video games, and since I have a quite bad memory I somewhere
	want to have a list of which games I have finished. And what better place than
	on this website? And some games I enjoy playing so much that I play them
	multiple times, and then they are even more fun to speedrun them, so here you
	can also see my records. Be impressed! 😎
</p>

<p>
	The time <code>??:??:??</code> means that I finished the game without measuring
	how long time it took, most likely because I needed to play it over a long period
	of time (several days, sometimes several weeks).
</p>

<div class="speedruns">
	<table border={1}>
		<thead>
			<tr>
				<th>Date Played</th>
				<th>Game</th>
				<th>Time</th>
				<th>Console</th>
				<th>Played On</th>
			</tr>
		</thead>
		<tbody>
			{#each speedruns as speedrun}
				<tr title={speedrun.comment}>
					<td>{speedrun.date}</td>
					<td>{speedrun.game.name}</td>
					<td>
						<code>
							{speedrunTimeToString(speedrun.time)}
						</code>
					</td>
					<td>{speedrun.game.consoleName}</td>
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
