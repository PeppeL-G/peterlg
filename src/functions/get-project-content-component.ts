const projectContentModules = import.meta.glob<MarkdownModule>(
	`../data/projects/*/content.md`,
	{ eager: false },
)

export async function getProjectContentComponent(project: Project){
	
	const module = await projectContentModules[
		`../data/projects/${project.id}/content.md`
	]()
	
	return module.default
	
}