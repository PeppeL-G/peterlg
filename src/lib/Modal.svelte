<script>
	import { getElementCenterById } from "functions/get-element-center-by-id.js"
	
	export let title = ""
	export let closeUrl = "/"
	export let originId = ""
	
	function backgroundTransition(node){
		return {
			duration: 500,
			css: (t) => {
				return `
					opacity: ${1*t};
				`
			}
		}
		
	}
	
	function modalTransition(node) {
		
		const originCenter = getElementCenterById(originId)
		
		const screenCenterX = window.innerWidth / 2
		const screenCenterY = window.innerHeight / 2
		
		const x = screenCenterX - originCenter.x
		const y = screenCenterY - originCenter.y
		
		return {
			duration: 500,
			css: (t) => {
				return `
					transform: translate(-50%, -50%) scale(${1*t});
					transform-origin: calc(50% - ${x}px) calc(50% - ${y}px);
				`
			}
		}
		
	}
	
	function onCloseAnchorClick(event){
		
		const previousEntryUrl = window.navigation?.entries()?.at(-2)?.url
		
		if(previousEntryUrl){
			
			const { href } = event.target
			
			console.log(href, previousEntryUrl)
			
			const regExpMatchSlashAtEnd = /\/$/
			
			if(
				previousEntryUrl.replace(regExpMatchSlashAtEnd, ``) ==
				href.replace(regExpMatchSlashAtEnd, ``)
			){
				
				event.preventDefault()
				window.history.back()
				
			}
			
		}
		
	}
	
</script>

<a
	class="background"
	href={closeUrl}
	transition:backgroundTransition
	on:click={onCloseAnchorClick}
></a>

<div
	class="modal"
	in:modalTransition
	out:modalTransition
>
	
	<h1>{title}</h1>
	
	<a class="close" href={closeUrl} on:click={onCloseAnchorClick}>
		<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<line x1="20" y1="80" x2="80" y2="20" stroke="black" stroke-width="5" />
			<line x1="20" y1="20" x2="80" y2="80" stroke="black" stroke-width="5" />
		</svg>
	</a>
	
	<div class="content">
		<slot />
	</div>
	
</div>

<style>
	
	.background{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		
		background-color: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(3px);
		height: 100%;
		width: 100%;
	}
	
	.modal{
		position: fixed;
		left: 50vw;
		top: 50vh;
		
		width: calc(100% - 1em);
		max-width: 48em;
		max-height: calc(100vh - 1em);
		padding: 1em;
		border-radius: 1em;
		background-color: white;
		
		overflow: auto;
		
		transform: translate(-50%, -50%);
		
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: auto auto;
		align-items: center;
		gap: 0.25em;
		
	}
	
	h1{
		grid-column: 1 / span 1;
		grid-row: 1 / span 1;
	}
	
	.close{
		
		grid-column: 2 / span 1;
		grid-row: 1 / span 1;
		align-self: start;
		
		transform: translate(0.5em, -0.5em);
		
		border-radius: 0.5em;
		background-color: red;
		text-decoration: none;
		opacity: 0.75;
		
		& svg{
			width: 3em;
			aspect-ratio: 1;
			vertical-align: middle;
		}
		
	}
	
	.content{
		grid-column: 1 / span 2;
		grid-row: 2 / span 1;
	}
	
	:global(body:has(.modal)){
		overflow: hidden;
	}
	
</style>