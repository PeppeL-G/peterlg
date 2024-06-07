<script>
	
	export let href = ""
	export let scaleFactor = 1.05
	export let id = ""
	
</script>

<a
	{href}
	style:--scale-factor="{scaleFactor}"
	id={id ? id : null}
	rel="bookmark"
>
	<slot />
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