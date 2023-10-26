<script>
	
	import Tag from "$lib/Tag.svelte"
	import { projects } from "data/projects.js"
	import { speedruns } from "data/speedruns.js"
	import { blogposts } from "data/blogposts.js"
	import { games } from "data/games";
	import { speedrunTimeToString } from "functions/speedrun-time-to-string.js"
	import Link from "$lib/Link.svelte"
	
	const newestProject = projects[0]
	const newestBlogpost = blogposts[0]
	const newestSpeedrun = speedruns[0]
	const newestSpeedrunGame = games.find(
		g => g.id == newestSpeedrun.gameId,
	)
	const newestSpeedrunCategory = newestSpeedrunGame.categories.find(
		c => c.id == newestSpeedrun.categoryId,
	)
	
	const cards = [{
		url: `/speedruns/${newestSpeedrunGame.id}`,
		title: `Newest Speedrun`,
		subtitle: newestSpeedrunGame?.name,
		content: `${newestSpeedrunCategory.name} in ${speedrunTimeToString(newestSpeedrun.time)}.`,
		tagNames: [`newest`, `speedrun`],
		imageUrl: `/speedrun-icon.png`,
		date: newestSpeedrun.date,
	}, {
		url: `/projects/${newestProject.id}`,
		title: `Newest Project`,
		subtitle: newestProject.title,
		content: newestProject.introduction,
		tagNames: [`newest`, `project`],
		imageUrl: `/projects/${newestProject.id}.png`,
		date: newestProject.datePosted,
	}, {
		url: `/blogposts/${newestBlogpost.id}`,
		title: `Newest Blogpost`,
		subtitle: newestBlogpost.title,
		content: newestBlogpost.summary,
		tagNames: [`newest`, `blogpost`],
		imageUrl: `/blogposts/${newestBlogpost.id}.png`,
		date: newestBlogpost.dateWritten,
	}]
	
	cards.sort(
		(a, b) => b.date.localeCompare(a.date),
	)
	
</script>

<h1>Welcome!</h1>
<p>Welcome to <code>peterlg.se</code>! Here you can read about various things I, Peter Larsson-Green, have done.</p>

<div class="cards">
	
	{#each cards as card}
		
		<Link href={card.url} removeUnderline>
			<h3>{card.title}</h3>
			<h2>{card.subtitle}</h2>
			<img src={card.imageUrl} alt="Card.">
			<p>{card.content}</p>
			<time datetime={card.date}>{card.date}</time>
			<div>
				{#each card.tagNames as tagName}
					<Tag name={tagName} />
				{/each}
			</div>
		</Link>
		
	{/each}
	
</div>

<style>	
	
	.cards{
		display: grid;
		grid-template-rows: auto auto 1fr auto auto auto;
		grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
		gap: 1em;
		padding: 1em;
	}
	
	.cards > :global(*){
		display: grid;
		grid-row: span 6;
		grid-template-rows: subgrid;
		grid-gap: 0;
		background-color: rgb(213, 213, 213);
		border-radius: 1.5em;
		padding: 1em;
		color: black;
		border: 1px solid black;
	}
	
	.cards h3{
		text-align: center;
		padding-bottom: 0.1em;
		margin: 0;
		font-size: 1.5em;
	}
	
	.cards img{
		display: block;
		margin: 0 auto;
		max-width: 80%;
		align-self: center;
	}
	
	.cards h2{
		text-align: center;
		padding-bottom: 0.1em;
		margin: 0;
		font-size: 1.15em;
		white-space: nowrap;
		overflow-x: hidden;
		text-overflow: ellipsis;
	}
	
	.cards p{
		margin: 0;
		margin-bottom: 0.5em;
		font-size: 1em;
		align-self: center;
	}
	
	.cards time{
		margin-bottom: 0.25em;
	}
	
	.cards div{
		display: flex;
		justify-content: right;
		gap: 0.5em;
	}
	
</style>