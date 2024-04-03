<script>
	import MainLink from "$lib/MainLink.svelte"
	import { mainPages } from "data/main-pages.js"
	
	const navbarPages = mainPages.filter(
		p => p.where == `navbar`,
	)
	
</script>

<nav>
	{#each navbarPages as page}
		<MainLink href={page.url}>
			{page.name}
		</MainLink>
	{/each}
</nav>

<style>
	nav {
		border: 1px solid black;
		border-radius: 1em;
		padding: 0 1em;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 0 1em;
	}
</style>
