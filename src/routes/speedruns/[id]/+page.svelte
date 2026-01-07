<script lang="ts">
	
	import { page } from '$app/state'
	import SpeedrunModal from '$lib/SpeedrunModal.svelte'
	
	const speedrunId = parseInt(page.params.id!)
	
</script>

<SpeedrunModal
	{speedrunId}
	closeUrl="/speedruns"
	originId={`speedrun-${speedrunId}`}
/>