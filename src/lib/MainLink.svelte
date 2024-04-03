<script>
	
	export let href = ""
	
	import { page } from "$app/stores"
	
	function isCurrent(p){
		
		const currentUrl = p.url.pathname
		
		return currentUrl.startsWith(href)
		
	}
	
</script>

<a
	{href}
	class:isCurrent={isCurrent($page)}
>
	<slot />
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