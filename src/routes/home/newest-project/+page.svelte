<script>
	
	import { projects } from "data/projects.js"
	import ProjectModal from "$lib/ProjectModal.svelte"
	
	const newestProject = projects[0]
	
</script>

<ProjectModal
	id={newestProject.id}
	closeUrl="/home"
/>