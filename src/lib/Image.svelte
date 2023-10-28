<script>
	
	import { page } from "$app/stores"
	
	export let src = ""
	export let alt = ""
	export let id = ""
	
	let originalAnchor = null
	let fullScreenAnchor = null
	
	function getLink(page, toFullScreen=true){
		
		const searchParams = new URLSearchParams(
			page.url.searchParams.toString(),
		)
		
		if(toFullScreen){
			searchParams.set('image', id)
		}else{
			searchParams.delete('image')
		}
		
		return `${page.url.pathname}?${searchParams.toString()}`
		
	}
	
	$: isFullScreen = new URLSearchParams(
		$page.url.searchParams.toString(),
	).get('image') == id
	
	function getCenter(low, high){
		return low + (high - low) / 2
	}
	
	function updateTransformOrigin(){
		
		const originalRect = originalAnchor.getBoundingClientRect()
		
		const originalCenterX = getCenter(
			originalRect.left,
			originalRect.right,
		)
		const originalCenterY = getCenter(
			originalRect.top,
			originalRect.bottom,
		)
		
		const fullScreenRect = fullScreenAnchor.getBoundingClientRect()
		
		const fullScreenCenterX = getCenter(
			fullScreenRect.left,
			fullScreenRect.right,
		)
		const fullScreenCenterY = getCenter(
			fullScreenRect.top,
			fullScreenRect.bottom,
		)
		
		const centerX = originalCenterX - fullScreenCenterX
		const centerY = originalCenterY - fullScreenCenterY
		
		fullScreenAnchor.style.setProperty(`--origin-left`, `${centerX}px`)
		fullScreenAnchor.style.setProperty(`--origin-top`,  `${centerY}px`)
		
	}
	
</script>

<a
	href={getLink($page)}
	data-sveltekit-noscroll
	bind:this={originalAnchor}
	on:click={updateTransformOrigin}
>
	<img
		{src}
		{alt}
		title={alt}
	>
</a>

<a
	href={getLink($page, false)}
	data-sveltekit-noscroll
	bind:this={fullScreenAnchor}
	class="fullScreen"
	class:isFullScreen
	on:click={updateTransformOrigin}
>
	<img
		{src}
		{alt}
		title={alt}
	>
</a>

<style>
	
	a{
		display: block;
	}
	
	img{
		max-width: 100%;
	}
	
	a.fullScreen{
		
		--origin-left: 50%;
		--origin-top: 50%;
		--blur-radius: 0;
		
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 1000;
		
		display: grid;
		place-items: center;
		visibility: hidden;
		backdrop-filter: blur(var(--blur-radius));
		
		transition: backdrop-filter 0.5s, background-color 0.5s, visibility 0s 0.5s;
		
	}
	
	a.fullScreen.isFullScreen{
		--blur-radius: 3px;
		visibility: visible;
		background-color: rgba(0, 0, 0, 0.5);
		transition: backdrop-filter 0.5s, background-color 0.5s, visibility 0s;
	}
	
	a.fullScreen img{
		transform-origin: calc(50% + var(--origin-left)) calc(50% + var(--origin-top));
		transform: scale(0);
		transition: transform 0.5s;
	}
	
	a.fullScreen.isFullScreen img{
		transform: scale(1);
	}
	
</style>