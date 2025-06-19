<script>
	import { browser } from "$app/environment"
	
	const trashPickupUrl = `https://minasidor.juneavfall.se/FutureWebJuneBasic/SimpleWastePickup/GetWastePickupSchedule?address=Grengatan%203%20B,%20Mullsj%C3%B6%20(38815)`
	
	async function getNextTrashPickup(){
		
		const response = await fetch(`https://corsproxy.io/?url=${trashPickupUrl}`)
		
		if(response.status != 200){
			throw new Error(`Got status code ${response.status}.`)
		}
		
		const nextTrashPickup = await response.json()
		
		return nextTrashPickup
		
	}
	
	function getNumberOfDaysTo(dateString){
		
		const date = Temporal.PlainDate.from(dateString)
		const today = Temporal.Now.plainDateISO()
		
		const durationLeft = today.until(date)
		
		return durationLeft.days
		
	}
	
	function getDaysLeftString(numberOfDaysLeft){
		
		if(numberOfDaysLeft == 0){
			return `Idag`
		}else if(numberOfDaysLeft == 1){
			return `Imorgon`
		}else{
			return `Om ${numberOfDaysLeft} dagar`
		}
		
	}
	
</script>

{#if browser}
	
	{#await getNextTrashPickup()}
		
		<p>Hämtar information...</p>
		
	{:then trashPickup}
		
		{#each trashPickup?.RhServices ?? [] as service}
			
			<h2>{service.WasteType}</h2>
			<dl>
				
				<dt>
					Hämtas nästa gång
				</dt>
				<dd>
					{service.NextWastePickup} (<b>{
						getDaysLeftString(
							getNumberOfDaysTo(
								service.NextWastePickup,
							),
						)
					}</b>)
				</dd>
				
				<dt>Hämtas</dt>
				<dd>{service.WastePickupFrequency}</dd>
				
				<dt>Beskrivning</dt>
				<dd>{service.Description}</dd>
				
				<dt>Är aktiv</dt>
				<dd>{service.IsActive ? `Ja` : `Nej`}</dd>
				
			</dl>
			
		{/each}
		
	{:catch error}
		
		<p>Kunde inte hämta och visa nästa soptämning på grund av följande fel:</p>
		
		<pre>{JSON.stringify(error, null, "  ")}</pre>
		
	{/await}
	
{/if}