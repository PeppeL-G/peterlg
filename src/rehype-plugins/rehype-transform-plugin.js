import { visit } from "unist-util-visit"

export default function rehypeTransformPlugin() {
	
	return function transformer(tree) {
		
		visit(
			tree,
			isAnchorNode,
			transformAnchorNode,
		)
		
		visit(
			tree,
			isTableNode,
			transformTableNode,
		)
		
	}
	
}

function isAnchorNode(node) {
	return node.tagName == `a`
}

function transformAnchorNode(anchorNode) {
	
	const href = anchorNode.properties.href ?? ``
	
	if (href.startsWith(`http`)) {
		
		anchorNode.properties = anchorNode.properties ?? {}
		
		anchorNode.properties.target = `_blank`
		
	}
	
}

function isTableNode(node) {
	return node.tagName == `table`
}

function transformTableNode(tableNode) {
	
	tableNode.properties = tableNode.properties ?? {}

	tableNode.properties.border = `1`
	tableNode.properties.style = `margin: 1em auto;`
	
}