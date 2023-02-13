<script>
	import Header from "./Header.svelte"
	import Nav from "./Nav.svelte"
	import Footer from "./Footer.svelte"
</script>

<div class="layout">
	
	<Header />
	
	<Nav />
	
	<main>
		<slot />
	</main>
	
	<Footer />
	
</div>

<style>
	
	.layout{
		min-height: 100%;
		max-width: 50em;
		margin: 0 auto;
		padding: 0.25em;
		padding-bottom: 1em;
	}
	
	main{
		width: 95%;
		margin: 0 auto;
		padding: 1em 0;
	}
	
	main :global(h1){
		text-align: center;
	}
	
	:global(body){
		background-color: rgb(175, 175, 175);
	}
	
</style>