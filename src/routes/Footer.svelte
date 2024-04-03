<script>
	import MainLink from "$lib/MainLink.svelte"
	import { mainPages } from "data/main-pages.js"
	
	const year = new Date().getFullYear();
	
	const footerPages = mainPages.filter(
		p => p.where == `footer`,
	)
	
</script>

<footer>
	<div class="text">
		<span>Copyright ©</span>
		<span>{year}</span>
		<span>Peter Larsson-Green</span>
	</div>
	<div class="links">
		{#each footerPages as page}
			<MainLink href="{page.url}">
				{page.name}
			</MainLink>
		{/each}
	</div>
</footer>

<style>
	footer {
		border: 1px solid black;
		border-radius: 1em;
		padding: 0.5em 1em;
		padding-bottom: 0;
		text-align: center;
		margin: 0 auto;
		width: 75%;
		overflow: hidden;
	}

	.text {
		line-height: 1.25;
	}

	.text span {
		white-space: nowrap;
	}
</style>
