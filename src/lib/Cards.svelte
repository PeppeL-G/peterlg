<script lang="ts">
	
	let {
		children,
	}: {
		children: Snippet;
	} = $props()
	
	import type { Snippet } from "svelte"
	
</script>

<div class="cards">
	
	{@render children()}
	
</div>

<style>
	
	.cards{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));
		grid-template-rows: auto auto auto auto auto;
		gap: 1em;
		justify-content: center;
		padding: 0 0.5em;
	}
	
</style>