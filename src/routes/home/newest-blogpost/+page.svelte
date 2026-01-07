<script lang="ts">
	
	import { blogposts } from "../../../data/blogposts.ts"
	import BlogpostModal from "$lib/BlogpostModal.svelte"
	
	const newestBlogpost = blogposts[0]
	
</script>

<BlogpostModal
	blogpostId={newestBlogpost.id}
	originId="newest-blogpost"
	closeUrl="/home/"
/>