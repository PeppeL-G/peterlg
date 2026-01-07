const blogpostContentModules = import.meta.glob<MarkdownModule>(
	`../data/blogposts/*/content.md`,
	{ eager: false },
)

export async function getBlogpostContentComponent(blogpost: Blogpost){
	
	const module = await blogpostContentModules[
		`../data/blogposts/${blogpost.id}/content.md`
	]()
	
	return module.default
	
}