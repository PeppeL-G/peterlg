<script>
	
	import Header from "./Header.svelte"
	import Nav from "./Nav.svelte"
	import Footer from "./Footer.svelte"
	import "./global.css"
	import { mainPages } from "data/main-pages.js"
	import { page } from "$app/stores"
	
	function isLeadingToMainPage(url, mainPage){
		return url.startsWith(mainPage.url)
	}
	
	$: currentPageIndex = mainPages.findIndex(
		p => isLeadingToMainPage($page.url.pathname, p),
	)
	
</script>

<div class="layout">
	
	<Header />
	
	<Nav />
	
	<div class="pages" style:--currentPageIndex={currentPageIndex}>
		{#each mainPages as mainPage, pageIndex (mainPage.name)}
			<div class="page" style:--pageIndex={pageIndex}>
				{#if isLeadingToMainPage($page.url.pathname, mainPage)}
					<h1>{mainPage.name}</h1>
					<main data-sveltekit-noscroll>
						<slot />
					</main>
				{:else}
					<div class="fakedPageContent">
						<h1>{mainPage.name}</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id accumsan lacus. Aliquam maximus metus ante, at euismod justo vestibulum ut. Curabitur ut metus neque. Pellentesque at est feugiat, mollis tellus vitae, elementum orci. Nulla scelerisque eros vitae mauris consectetur vehicula. Vestibulum vitae dictum nisl. Mauris non turpis mattis, viverra orci egestas, ullamcorper sem. Nunc viverra ex nunc, sit amet tempus ipsum faucibus rutrum. Sed sit amet mollis nunc. Nam sit amet est lacus.
						</p>
						<p>
							Sed vitae interdum nulla. Cras viverra blandit eleifend. Donec eget odio augue. Pellentesque eleifend fringilla consequat. Sed mi turpis, semper quis tellus at, placerat suscipit mauris. Etiam nec lacinia lacus. Curabitur nunc mi, sollicitudin vel fringilla ac, malesuada a erat. 
						</p>
						<p>
							Etiam in metus ac diam sodales scelerisque. In tincidunt, sapien eget vulputate egestas, libero augue placerat mauris, ac viverra massa lacus fringilla nisl. Sed tempor orci vel sapien feugiat, nec dictum neque lacinia. Donec viverra at nisl at porta. Praesent vel porta diam. Nulla erat ex, lobortis non metus nec, convallis ullamcorper ipsum. Nunc fringilla vitae ligula vitae cursus. Aenean tincidunt suscipit ultricies. Nullam sodales nunc pharetra egestas tempus. Fusce ipsum diam, rhoncus id risus id, sodales tincidunt tortor. Nullam egestas vehicula nisl et consectetur. Phasellus ullamcorper, velit ut congue euismod, est velit lobortis nulla, eu tristique odio ante gravida nulla.
						</p>
						<p>
							Cras ullamcorper est in risus consequat vestibulum. Aenean eget lorem eu nibh volutpat porttitor pharetra sed mauris. Vestibulum auctor est vitae nisi vestibulum, tincidunt fermentum sem molestie. Maecenas et scelerisque dui, sit amet dapibus odio. Sed vel euismod turpis. Maecenas feugiat est vel justo tincidunt, vel sollicitudin velit iaculis.
						</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
	
	<Footer />
	
</div>

<style>
	
	.layout{
		min-height: 100%;
		max-width: 40em;
		margin: 0 auto;
		padding: 0.25em;
		padding-top: 0;
		
		display: grid;
		grid-template-rows: auto auto 1fr auto;
		grid-template-columns: 100%;
		place-items: center;
		
	}
	
	.pages{
		--currentPageIndex: 0;
		
		grid-column: 1;
		grid-row: 3;
		
		width: 100%;
		min-height: 100%;
		padding: 0.5em 0.25em;
		
		display: grid;
		place-items: center;
		grid-template-columns: 100%;
		grid-template-rows: minmax(100%, auto);
		
		overflow: hidden;
		
	}
	
	.page{
		
		--pageIndex: 0;
		
		grid-column: 1;
		grid-row: 1;
		
		width: 100%;
		min-height: 100%;
		
		position: relative;
		left: calc((-100% - 1em) * (var(--currentPageIndex) - var(--pageIndex)));
		
		padding: 0.5em 1em;
		border: 1px solid black;
		border-radius: 1em;
		background-color: rgba(0, 0, 0, 0.10);
		
		transition: left 1s;
		
	}
	
	.fakedPageContent{
		
		max-height: 50vh;
		overflow-y: hidden;
		
		& p{
			color: transparent;
			text-shadow: 0 0 5px rgba(0,0,0,0.5);
		}
		
	}
	
</style>