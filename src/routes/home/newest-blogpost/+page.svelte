<script>
	
	import { blogposts } from "data/blogposts.js"
	import BlogpostModal from "$lib/BlogpostModal.svelte"
	
	const newestBlogpost = blogposts[0]
	
</script>

<BlogpostModal
	id={newestBlogpost.id}
	closeUrl="/home"
/>