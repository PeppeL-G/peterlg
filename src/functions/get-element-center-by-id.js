import { getCenter } from "functions/get-center.js"

export function getElementCenterById(id) {

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