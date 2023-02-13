<script>
	import { isCurrentLink } from "../actions/isCurrentLink.js"
	
	const year = new Date().getFullYear()
	
</script>

<footer>
	<div class="text">
		<span>Copyright ©</span>
		<span>{year}</span>
		<span>Peter Larsson-Green</span>
	</div>
	<div class="links">
		<a use:isCurrentLink href="/about">About</a>
		<a use:isCurrentLink href="/changelog">v1.0.0</a>
	</div>
</footer>

<style>
	
	footer{
		border: 1px solid black;
		border-radius: 1em;
		padding: 0.5em 1em;
		padding-bottom: 0;
		text-align: center;
		margin: 0 auto;
		width: 75%;
		overflow: hidden;
	}
	
	a{
		color: black;
		font-size: 120%;
	}
	
	.text{
		line-height: 1.25;
	}
	
	.text span{
		white-space: nowrap;
	}
	
</style>