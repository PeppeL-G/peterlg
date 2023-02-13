<script context="module">
	
	const colorsByName = new Map()
	colorsByName.set("newest", "rgba(0, 255, 0, 0.5)")
	colorsByName.set("project", "rgba(0, 255, 255, 0.5)")
	
</script>

<script>
	export let name = ""
	
</script>

<span
	class="tag"
	style:background-color={colorsByName.get(name)}
>
	{name}
</span>

<style>
	.tag{
		display: inline-block;
		border-radius: 0.5em;
		padding: 0.25em 0.5em;
		border: 1px solid black;
		font-size: 0.75em;
		font-weight: 700;
		text-transform: capitalize;
	}
</style>