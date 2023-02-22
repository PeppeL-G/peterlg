<script>
	
	import Link from "$lib/Link.svelte"
	
	const links = [
		{text: "Start", url: "/"},
		{text: "Projects", url: "/projects"},
		{text: "Speedruns", url: "/speedruns"},
	]
	
</script>

<nav>
	{#each links as link}
		<Link href={link.url}>
			{link.text}
		</Link>
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