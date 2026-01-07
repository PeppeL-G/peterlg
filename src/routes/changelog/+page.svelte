<script lang="ts">
	
	import { changelogEntries } from "../../data/changelog-entries.ts"
	
	const entries = changelogEntries.filter(
		e => 0 < e.changeDescriptions.length,
	)
	
</script>

<p>This changelog follow the <a href="https://semver.org/" target="_blank">SemVer</a> convention.</p>

{#each entries as entry}
	
	<h2>
		<span class="version">v{entry.version}</span>
		<span class="date">{entry.date}</span>
	</h2>
	<ul>
		{#each entry.changeDescriptions as changeDescription}
			<li>{@html changeDescription}</li>
		{/each}
	</ul>
	
{/each}

<style>
	
	h2{
		font-size: 1.2em;
		margin-bottom: 0.2em;
	}
	
	.version{
		font-family: 'Courier New', Courier, monospace;
	}
	
	.date{
		font-size: 0.8em;
	}
	.date::before{
		content: "("
	}
	.date::after{
		content: ")"
	}
	
	ul{
		margin-top: 0;
		margin-bottom: 0.1em;
	}
	
</style>