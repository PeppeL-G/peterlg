import type { Attachment } from "svelte/attachments"

export const createPinchAttachment = (
	{onPinch}: {onPinch: (pinchFactor: number) => void},
): Attachment<HTMLElement> => {
	
	return (element) => {
		
		// Disabling pinch zoom does currently
		// unfortunately not work in Firefox :(
		element.style.touchAction = `pan-x pan-y`
		
		let oldHypotenuse = -1
		
		element.addEventListener(`touchstart`, (event) => {
			
			oldHypotenuse = getHypotenuse(event.touches)
			
		})
		
		element.addEventListener(`touchmove`, (event) => {
			
			const newHypotenuse = getHypotenuse(event.touches)
			
			if(oldHypotenuse != -1 && newHypotenuse != -1){
				
				const hypotenuseQuote = newHypotenuse / oldHypotenuse
				
				onPinch(hypotenuseQuote)
				
			}
			
			oldHypotenuse = newHypotenuse
			
		})
		
		element.addEventListener(`touchend`, (event) => {
			oldHypotenuse = -1
		})
		
		element.addEventListener(`touchcancel`, (event) => {
			oldHypotenuse = -1
		})
		
	}
	
}

function getHypotenuse(touches: TouchList){
	
	if(touches.length != 2){
		return -1
	}
	
	const [touch0, touch1] = touches
	
	return Math.hypot(
		touch0.screenX - touch1.screenX,
		touch0.screenY - touch1.screenY,
	)
	
}