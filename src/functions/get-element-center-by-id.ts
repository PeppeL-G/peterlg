import { getCenter } from "./get-center.ts"

export function getElementCenterById(id: string) {
	
	const element = document.getElementById(id) ?? document.body
	
	const rect = element.getBoundingClientRect()
	
	const x = getCenter(
		rect.left,
		rect.right,
	)
	const y = getCenter(
		rect.top,
		rect.bottom,
	)
	
	return {
		x,
		y,
	}
	
}