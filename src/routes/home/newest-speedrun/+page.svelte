<script lang="ts">
	
	import { speedruns } from "../../../data/speedruns.ts"
	import SpeedrunModal from "$lib/SpeedrunModal.svelte"
	
	const newestSpeedrun = speedruns[0]
	
</script>

<SpeedrunModal
	speedrunId={newestSpeedrun.id}
	originId="newest-speedrun"
	closeUrl="/home"
/>