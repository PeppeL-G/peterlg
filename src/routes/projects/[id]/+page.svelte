<script lang="ts">
	
	import { page } from "$app/state"
	import ProjectModal from "$lib/ProjectModal.svelte"
	
	const projectId = page.params.id!
	
</script>

<ProjectModal
	{projectId}
	closeUrl="/projects/"
	originId={`project-${projectId}`}
/>