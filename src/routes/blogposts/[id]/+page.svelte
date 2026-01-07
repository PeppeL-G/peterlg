<script lang="ts">
	
	import { page } from "$app/state"
	import BlogpostModal from "$lib/BlogpostModal.svelte"
	
	const blogpostId = page.params.id!
	
</script>

<BlogpostModal
	{blogpostId}
	closeUrl="/blogposts/"
	originId={`blogpost-${blogpostId}`}
/>