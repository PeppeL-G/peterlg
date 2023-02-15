<script>
	export let src = ""
	export let alt = ""
	
	import { base } from "$app/paths"
	
</script>

<img
	src={base+src}
	{alt}
	title={alt}
>