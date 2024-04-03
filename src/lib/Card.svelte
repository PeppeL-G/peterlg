<script>
	
	export let url = ""
	export let id = ""
	export let title = ""
	export let content = ""
	export let tagNames = [""].slice(1)
	export let imageUrl = ""
	export let date = ""
	
	import SubLink from "./SubLink.svelte"
	import Tag from "./Tag.svelte"
	
</script>

<div class="card">
	<SubLink href={url} {id}>
		<h3>{title}</h3>
		<img src={imageUrl} alt="Card.">
		<p>{content}</p>
		<time datetime={date}>{date}</time>
		<div>
			{#each tagNames as tagName}
				<Tag name={tagName} />
			{/each}
		</div>
	</SubLink>
</div>

<style>
	
	.card{
		
		display: contents;
		
		& > *{
			
			display: grid;
			grid-row: span 5;
			grid-template-rows: subgrid;
			align-items: center;
			grid-gap: 0;
			
			background-color: rgb(213, 213, 213);
			border-radius: 1.5em;
			padding: 1em;
			color: black;
			border: 1px solid black;
			
			& h3{
				text-align: center;
				margin: 0;
				padding: 0;
				font-size: 1.5em;
			}
			
			& img{
				display: block;
				margin: 0 auto;
				max-width: 80%;
			}
			
			& p{
				margin: 0.25em 0;
				font-size: 1em;
				align-self: center;
			}
			
			& time{
				margin-bottom: 0.25em;
			}
			
			& div{
				display: flex;
				justify-content: right;
				gap: 0.5em;
			}
			
		}
		
	}
	
</style>