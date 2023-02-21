<script>
	export let href = ""
	export let removeUnderline = false
	
	import { page } from "$app/stores"
	
	$: isCurrent = getIsCurrent($page)
	
	function getIsCurrent(p){
		
		const currentUrl = p.url.pathname
		
		// Give start page special treatment.
		if(href == "/"){
			return (currentUrl == "/")
		}else if(currentUrl.startsWith(href)){
			return true
		}else{
			return false
		}
		
	}
	
</script>

<a
	{href}
	class:isCurrent
	class:removeUnderline
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
	
	a.removeUnderline{
		text-decoration: none;
	}
	
</style>