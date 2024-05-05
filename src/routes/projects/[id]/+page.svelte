<script>
	
	import { page } from '$app/stores'
	import ProjectModal from '$lib/ProjectModal.svelte'
	
</script>

<ProjectModal
	id={$page.params.id}
/>