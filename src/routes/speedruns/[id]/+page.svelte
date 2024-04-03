<script>
	
	import { page } from '$app/stores'
	import SpeedrunModal from '$lib/SpeedrunModal.svelte';
	
</script>

<SpeedrunModal
	id={$page.params.id}
	closeUrl="/speedruns/"
/>