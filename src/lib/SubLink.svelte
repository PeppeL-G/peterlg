<script lang="ts">
	
	let {
		href,
		scaleFactor = 1.05,
		id,
		children,
	}: {
		href: string;
		scaleFactor?: number;
		id?: string;
		children: Snippet;
	} = $props()
	
	import type { Snippet } from "svelte"
	
</script>

<a
	{href}
	style:--scale-factor="{scaleFactor}"
	{id}
	rel="bookmark"
>
	{@render children()}
</a>

<style>
	
	a{
		display: inline-block;
		padding: 0.5em;
		text-decoration: none;
	}
	
	a:hover{
		transform: scale(var(--scale-factor));
	}
	
</style>