<script lang="ts">
	
	let {
		href,
		children,
	}: {
		href: string;
		children: Snippet;
	} = $props()
	
	import { page } from "$app/state"
	import type { Snippet } from "svelte"
	
</script>

<a
	{href}
	class:isCurrent={page.url.pathname.startsWith(href)}
>
	{@render children()}
</a>

<style>
	
	a{
		display: inline-block;
		padding: 0.5em;
	}
	
	a:hover{
		transform: scale(1.1);
	}
	
	a.isCurrent{
		font-weight: bold;
		transform: scale(1.1);
	}
	
</style>