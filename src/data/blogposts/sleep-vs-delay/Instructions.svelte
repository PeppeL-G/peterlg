<script>
	
	export let instructionsText = ``
	
	function getInstructions(instructionsText){
		
		return instructionsText.trim().split(/\r?\n/).map(line => {
			
			const [color, number] = line.split(" ").map(v => v.trim())
			
			return {
				color,
				number,
			}
			
		})
		
	}
	
	function getInstructionText(instruction){
		
		if(instruction.number == `...`){
			return `...`
		}
		
		return `Instruction ${String.fromCharCode(64 + parseInt(instruction.number))}`
		
	}
	
</script>

<div class="instructions">
	
	{#each getInstructions(instructionsText) as instruction}
		<div
			style:background-color={instruction.color}
		>
			<div class="number">
				{instruction.number}
			</div>
			<div class="text">
				{getInstructionText(instruction)}
			</div>
		</div>
	{/each}
	
	</div>

<style>
	
	.instructions{
		max-width: 20em;
		margin: 0.75em auto;
		
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: 1fr;
		row-gap: 1px;
		
		& > div{
			
			display: grid;
			grid-column: 1 / span 2;
			grid-row: span 1;
			
			grid-template-columns: subgrid;
			
			& > div{
				
				padding: 0.5em;
				
				&.number{
					text-align: right;
				}
				
				&.text{
					padding-left: 0;
				}
				
			}
			
		}
		
	}
	
</style>