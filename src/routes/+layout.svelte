<script lang="ts">
	
	let {
		children,
	}: {
		children: Snippet;
	} = $props()
	
	import Header from "./Header.svelte"
	import Nav from "./Nav.svelte"
	import Footer from "./Footer.svelte"
	import "./global.css"
	import { mainPages } from "../data/main-pages.ts"
	import FakedPageContent from "./FakedPageContent.svelte"
	import type { Snippet } from "svelte"
	import { page } from "$app/state"
	import type { Attachment } from "svelte/attachments"
	
	function isLeadingToMainPage(url: string, mainPage: MainPage){
		return url.startsWith(mainPage.url)
	}
	
	let currentPageIndex = $derived(
		mainPages.findIndex(
			p => isLeadingToMainPage(page.url.pathname, p),
		),
	)
	
	const cachedPageChildren: Record<string, ChildNode[]> = {
		// `/the/path`: [childNode1, ...],
	}
	
	function createStorePageChildrenInCacheAttachment(pagePath: string){
		
		return function(node){
			cachedPageChildren[pagePath] = [
				...node.cloneNode(true).childNodes,
			]
		} as Attachment<HTMLElement>
		
	}
	
	function createInsertCachedPageChildren(pagePath: string){
		
		return function insertCachedPageChildrenAttachment(node){
			
			const pageChildren = cachedPageChildren[pagePath]
			
			node.append(
				...pageChildren.map(
					child => child.cloneNode(true),
				),
			)
			
		} as Attachment<HTMLElement>
		
	}
	
</script>

<div class="layout">
	
	<Header />
	
	<Nav />
	
	<div class="pages" style:--currentPageIndex={currentPageIndex}>
		{#each mainPages as mainPage, pageIndex (mainPage.name)}
			
			<section class="page" style:--pageIndex={pageIndex}>
				
				{#if isLeadingToMainPage(page.url.pathname, mainPage)}
					<main
						data-sveltekit-noscroll
						{@attach createStorePageChildrenInCacheAttachment(mainPage.url)}
					>
						<h1>{mainPage.name}</h1>
						{@render children()}
					</main>
				{:else if mainPage.url in cachedPageChildren}
					<div class="fakedPageContent" hidden>
						<div
							{@attach createInsertCachedPageChildren(mainPage.url)}
						></div>
					</div>
				{:else}
					<div class="fakedPageContent" hidden>
						<h1>{mainPage.name}</h1>
						<FakedPageContent />
					</div>
				{/if}
				
				</section>
				
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
		
		display: block;
		
		max-height: 50vh;
		overflow-y: hidden;
		
		filter: blur(10px);
		
	}
	
</style>