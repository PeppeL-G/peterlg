<script>
	import Link from "$lib/Link.svelte";
	import { changelogEntries } from "data/changelog-entries.js";

	const year = new Date().getFullYear();
	
	const lastEntry = changelogEntries.find(
		e => 0 < e.changeDescriptions.length,
	)
	
</script>

<footer>
	<div class="text">
		<span>Copyright ©</span>
		<span>{year}</span>
		<span>Peter Larsson-Green</span>
	</div>
	<div class="links">
		<Link href="/about">About</Link>
		<Link href="/changelog">v{lastEntry.version}</Link>
	</div>
</footer>

<style>
	footer {
		border: 1px solid black;
		border-radius: 1em;
		padding: 0.5em 1em;
		padding-bottom: 0;
		text-align: center;
		margin: 0 auto;
		width: 75%;
		overflow: hidden;
	}

	.text {
		line-height: 1.25;
	}

	.text span {
		white-space: nowrap;
	}
</style>
