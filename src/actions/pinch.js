export function pinch(element, {onPinch}){
	
	let oldTouches = null
	let oldHypontenuse = -1
	
	element.addEventListener(`touchstart`, (event) => {
		oldTouches = event.touches
	})
	
	element.addEventListener(`touchmove`, (event) => {
		
		const newTouches = event.touches
		
		if(oldTouches.length == 2 && newTouches.length == 2){
			
			event.preventDefault()
			
			const newHypotenuse = Math.hypot(
				oldTouches.item(0).screenX - newTouches.item(1).screenX,
				oldTouches.item(0).screenY - newTouches.item(1).screenY,
			)
			
			if(oldHypontenuse != -1){
				
				const hypotenuseDifference = newHypotenuse - oldHypontenuse
				
				onPinch(hypotenuseDifference)
				
			}
			
			oldHypontenuse = newHypotenuse
			
		}
		
		oldTouches = newTouches
		
	})
	
	element.addEventListener(`endtouch`, (event) => {
		oldTouches = null
		oldHypotenuse = -1
	})
	
}