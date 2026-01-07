import { visit } from "unist-util-visit"
import type { Plugin } from "unified"
import type { Root } from "hast"

export const createRehypeTransformersPlugin: Plugin<[], Root> = () => {
	
	return function transformersPlugin(tree: Root){
		
		visit(tree, (node) => {
			
			// Transform anchor elements.
			if(node.type == `element` && node.tagName == `a`){
				
				const href = node.properties.href as string ?? ``
				
				if(href.startsWith(`http`)){
					
					node.properties.target = `_blank`
					
				}
				
				return
				
			}
			
			// Transform table elements.
			if(node.type == `element` && node.tagName == `table`){
				
				node.properties.border = `1`
				node.properties.style = `margin: 1em auto;`
				
				return
				
			}
			
		})
		
	}
	
}