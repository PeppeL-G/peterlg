<script>
	export let href = ""
	export let removeUnderline = false
	
	import { base } from '$app/paths'
	import { page } from "$app/stores"
	
	$: isCurrent = getIsCurrent($page)
	
	function getIsCurrent(p){
		
		const currentUrl = p.url.pathname
		
		// Give start page special treatment.
		if(href == "/"){
			return (currentUrl == base+"/")
		}else if(currentUrl.startsWith(base+href)){
			return true
		}else{
			return false
		}
		
	}
	
</script>

<a
	href={base+href}
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