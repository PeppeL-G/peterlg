<script lang="ts">
	
	let {
		src,
		alt,
	}: {
		src: string;
		alt: string;
	} = $props()
	
	import type { Attachment } from "svelte/attachments"
	
	// When this attachment is used...
	const fullScreenAttachment: Attachment<HTMLElement> = (element) => {
		
		// ... create a copy of the original element as the fullscreen element.
		const fullScreenElement = element.cloneNode(true) as HTMLElement
		fullScreenElement.classList.add('fullScreen')
		
		// When clicking on the original element...
		element.addEventListener('click', async function(){
			
			const rect = element.getBoundingClientRect()
			
			// ...place the fullscreen element on top of the original element...
			fullScreenElement.style.left   = `${rect.left}px`
			fullScreenElement.style.right  = `${window.innerWidth - rect.right}px`
			fullScreenElement.style.top    = `${rect.top}px`
			fullScreenElement.style.bottom = `${window.innerHeight - rect.bottom}px`
			
			document.body.appendChild(fullScreenElement)
			
			// ...and then transition the fullscreen element to full screen.
			await new Promise(r => setTimeout(r))
			fullScreenElement.classList.add('fullscreenTransitioning')
			
			fullScreenElement.style.left   = `0px`
			fullScreenElement.style.right  = `0px`
			fullScreenElement.style.top    = `0px`
			fullScreenElement.style.bottom = `0px`
			
		})
		
		// When clicking on the fullscreen element...
		fullScreenElement.addEventListener('click', async function(){
			
			// ...place it over the original element...
			const rect = element.getBoundingClientRect()
			
			fullScreenElement.style.left   = `${rect.left}px`
			fullScreenElement.style.right  = `${window.innerWidth - rect.right}px`
			fullScreenElement.style.top    = `${rect.top}px`
			fullScreenElement.style.bottom = `${window.innerHeight - rect.bottom}px`
			
			fullScreenElement.classList.remove(`fullscreenTransitioning`)
			
			fullScreenElement.addEventListener('transitionend', (e) => {
				fullScreenElement.remove()
			}, { once: true })
			
		})
		
		// When this component is removed...
		return () => {
			
			// ...remove the fullscreen element.
			fullScreenElement.remove()
			
		}
		
	}
	
</script>

<div
	{@attach fullScreenAttachment}
	class="background"
>
	<img
		{src}
		{alt}
		title={alt}
	>
</div>

<style>
	
	.background{
		display: grid;
		place-items: center;
		grid-template-columns: minmax(0, 1fr);
		grid-template-rows: minmax(0, 1fr);
		cursor: pointer;
		width: 100%;
		height: 100%;
		
		transition-property: left, right, top, bottom, background-color;
		transition-duration: 1s;
	}
	
	:global(.fullscreenTransitioning){
		background-color: rgba(0, 0, 0, 0.966) !important;
	}
	
	:global(.background.fullScreen){
		
		position: fixed;
		/*
			top, right, left, bottom set by JS.
		*/
		
		width: auto;
		height: auto;
		
	}
	
	img{
		max-width: 100%;
		max-height: 100%;
	}
	
</style>