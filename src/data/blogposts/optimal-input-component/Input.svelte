<script>
	
	export let type = "text"
	export let name = ""
	export let value = ""
	export let title = ""
	export let hint = ""
	export let errorMessage = ""
	
</script>

<label>
	<input {type} {name} {value} placeholder=" ">
	<div class="title">{title}</div>
	<div class="errorMessage">{errorMessage}</div>
	<div class="hint">{hint}</div>
</label>

<style>
	
	label{
		display: grid;
		grid-template-columns: 0.75em min-content minmax(1em, 1fr) auto 0.5em;
		grid-template-rows: min-content min-content;
		margin: 1.5em 0;
		position: relative;
		--small-text-font-size: 75%;
	}
	
	input{
		grid-column: 1 / span 5;
		grid-row: 1 / span 2;
		background-color: transparent;
		border-radius: 0.5em;
		padding: 0.5em;
		padding-left: 0.75em;
		border-color: black;
		font-size: inherit;
	}
	
	.title{
		grid-column: 2;
		grid-row: 1;
		transform: translateY(90%) scale(1.6);
		font-size: var(--small-text-font-size);
		transition-property: transform, background-color, font-size;
		transition-duration: 0.3s;
		transform-origin: center left;
		padding: 0 0.25em;
		color: gray;
		white-space: nowrap;
		overflow: scroll;
		border-radius: 0.5em;
		background-color: white;
	}
	
	input:focus + .title,
	input:not(:placeholder-shown) + .title{
		transform: translateY(-40%);
	}
	
	.errorMessage{
		grid-column: 4;
		grid-row: 1;
		transform: translateY(-40%);
		background-color: white;
		border-radius: 0.5em;
		padding: 0 0.25em;
		color: red;
		font-size: var(--small-text-font-size);
		white-space: nowrap;
		overflow: auto;
		scrollbar-width: none;
		text-overflow: ellipsis;
	}
	
	/* Only show the error message div if it's not empty. */
	.errorMessage:empty{
		display: none;
	}
	
	.hint{
		position: absolute;
		left: 5em;
		right: 0.5em;
		bottom: 0;
		background-color: gray;
		border-bottom-left-radius: 0.55em;
		border-bottom-right-radius: 0.55em;
		font-size: var(--small-text-font-size);
		padding: 0.25em 0.5em;
		transform-origin: top;
		transform: translateY(100%) scaleY(0);
		transition-property: transform;
		transition-duration: 0.75s;
		transition-timing-function: ease-out;
		transition-delay: 0.05s;
		z-index: 1;
	}
	
	.hint:empty{
		display: none;
	}
	
	input:focus + .title + .errorMessage + .hint{
		transform: translateY(100%) scaleY(1);
		transition-delay: 0.25s;
	}
	
</style>