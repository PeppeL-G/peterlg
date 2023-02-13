<script>
	
	export let url = ""
	export let title = ""
	export let content = ""
	export let tagNames = []
	export let imageUrl = ""
	export let date = ""
	
	import Tag from "./Tag.svelte"
	
</script>

<a href={url} class="card">
	<h3>{title}</h3>
	<img src={imageUrl} alt="Card.">
	<p>{content}</p>
	<time datetime={date}>{date}</time>
	<div>
		{#each tagNames as tagName}
			<Tag name={tagName} />
		{/each}
	</div>
</a>

<style>
	
	.card{
		display: grid;
		grid-template-rows: auto 1fr auto auto;
		background-color: rgb(213, 213, 213);
		border-radius: 1.5em;
		padding: 1em;
		text-decoration: none;
		color: black;
		border: 1px solid black;
		transition: transform 0.175s ease-in-out;
	}
	
	.card:hover{
		transform: scale(1.1);
	}
	
	.card h3{
		text-align: center;
		padding-bottom: 0.5em;
		margin: 0;
		font-size: 1.5em;
	}
	
	.card img{
		display: inline-block;
		margin: 0 auto;
	}
	
	.card p{
		margin: 0;
		font-size: 1em;
	}
	
	.card span{
		grid-row: 4;
		text-align: right;
		padding-top: 0.5em;
	}
	
	.card div{
		display: flex;
		justify-content: right;
		gap: 0.5em;
	}
	
</style>