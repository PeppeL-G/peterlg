<script>
	
	import { page } from '$app/stores'
	import BlogpostModal from '$lib/BlogpostModal.svelte'
	
</script>

<BlogpostModal
	id={$page.params.id}
	closeUrl="/blogposts"
/>