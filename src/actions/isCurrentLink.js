import { page } from "$app/stores"

/**
 * @param {HTMLAnchorElement} anchor
 */
export function isCurrentLink(anchor){
	
	const href = anchor.getAttribute('href')
	
	if(!href){
		return
	}
	
	const unsubscribe = page.subscribe((p) => {
		
		const currentUrl = p.url.pathname
		
		if(
			(href == currentUrl) ||
			(href != "/" && currentUrl.startsWith(href))
		){
			anchor.classList.add("isCurrent")
		}else{
			anchor.classList.remove("isCurrent")
		}
		
	})
	
	return {
		destroy(){
			unsubscribe()
		}
	}
	
}