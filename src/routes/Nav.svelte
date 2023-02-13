<script>
	
	import { isCurrentLink } from "../actions/isCurrentLink.js"
	
	const links = [
		{text: "Start", url: "/"},
		{text: "Projects", url: "/projects"},
	]
	
</script>

<nav>
	{#each links as link}
		<a
			href="{link.url}"
			use:isCurrentLink
		>
			{link.text}
		</a>
	{/each}
</nav>

<style>
	
	nav{
		border: 1px solid black;
		border-radius: 1em;
		padding: 0 1em;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	
	a{
		transition: transform 0.175s;
		font-size: 120%;
	}
	
</style>