<script lang="ts">
	
	import type { Snippet } from "svelte"
	
	let {
		title,
		type = `info`,
		children,
	}: {
		title: string,
		type: `info`,
		children: Snippet
		
	} = $props()
	
	const typeToColorMap = {
		info: `cyan`,
	}
	
</script>

<details class="infoBox" style:background-color={typeToColorMap[type]}>
	
	<summary class="title">
		{title}
	</summary>
	
	<div class="body">
		{@render children()}
	</div>
	
</details>

<style>
	
	.infoBox{
		
		margin: 2em;
		border: 2px solid black;
		border-radius: 1em;
		
		.title{
			font-weight: bold;
			font-size: 1.2em;
			padding: 1em;
			cursor: pointer;
		}
		
		.body{
			padding: 1em;
			padding-top: 0;
		}
		
	}
	
</style>