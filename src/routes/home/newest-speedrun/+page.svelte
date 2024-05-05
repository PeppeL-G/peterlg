<script>
	
	import { speedruns } from "data/speedruns.js"
	import SpeedrunModal from "$lib/SpeedrunModal.svelte"
	
	const newestSpeedrun = speedruns[0]
	
</script>

<SpeedrunModal
	id={newestSpeedrun.id}
	originId="newest-speedrun"
	closeUrl="/home"
/>