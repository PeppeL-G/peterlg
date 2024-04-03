<script>
	
	import { tick } from "svelte"
	
	export let src = ""
	export let alt = ""
	
	let originalElement = null
	
	function fullScreenAction(element){
		
		const fullScreenElement = element.cloneNode(true)
		fullScreenElement.classList.add('fullScreen')
		
		fullScreenElement.addEventListener('click', function(){
			fullScreenElement.style.setProperty(`--left`, `50vw`)
			fullScreenElement.style.setProperty(`--right`, `50vw`)
			fullScreenElement.style.setProperty(`--top`, `50vh`)
			fullScreenElement.style.setProperty(`--bottom`, `50vh`)
		})
		
		document.body.appendChild(fullScreenElement)
		
		element.addEventListener('click', async function(){
			
			const rect = element.getBoundingClientRect()
			
			const oldTransitionDuration = fullScreenElement.style.transitionDuration
			
			fullScreenElement.style.transitionDuration = `0s`
			fullScreenElement.style.setProperty(`--left`, `${rect.left}px`)
			fullScreenElement.style.setProperty(`--right`, `calc(100vw - ${rect.left + rect.width}px)`)
			fullScreenElement.style.setProperty(`--top`, `${rect.top}px`)
			fullScreenElement.style.setProperty(`--bottom`, `calc(100vh - ${rect.top + rect.height}px)`)
			
			await tick();
			
			fullScreenElement.style.transitionDuration = oldTransitionDuration
			fullScreenElement.style.setProperty(`--left`, `0`)
			fullScreenElement.style.setProperty(`--right`, `0`)
			fullScreenElement.style.setProperty(`--top`, `0`)
			fullScreenElement.style.setProperty(`--bottom`, `0`)
			
		})
		
		return {
			destroy(){
				document.body.removeChild(fullScreenElement)
			}
		}
		
	}
	
</script>

<div
	bind:this={originalElement}
	use:fullScreenAction
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
		background-color: black;
		cursor: pointer;
	}
	
	:global(.background.fullScreen){
		
		--left: 50vw;
		--right: 50vw;
		--top: 50vh;
		--bottom: 50vh;
		
		position: fixed;
		left: var(--left);
		right: var(--right);
		top: var(--top);
		bottom: var(--bottom);
		
		transition-property: left, right, top, bottom;
		transition-duration: 1s;
		
	}
	
	img{
		max-width: 100%;
	}
	
</style>