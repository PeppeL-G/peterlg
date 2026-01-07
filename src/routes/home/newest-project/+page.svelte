<script lang="ts">
	
	import { projects } from "../../../data/projects.ts"
	import ProjectModal from "$lib/ProjectModal.svelte"
	
	const newestProject = projects[0]
	
</script>

<ProjectModal
	projectId={newestProject.id}
	originId="newest-project"
	closeUrl="/home"
/>