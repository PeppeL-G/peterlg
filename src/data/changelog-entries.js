export const changelogEntries = [{
	version: "?.?.?",
	date: "????-??-??",
	changeDescriptions: [],
}, {
	version: "1.8.1",
	date: "2023-10-25",
	changeDescriptions: [
		`Fixed CSS in production error (import from node_modules)`,
	],
}, {
	version: "1.8.0",
	date: "2023-10-25",
	changeDescriptions: [
		`Updated npm dependencies to newer versions`,
		`Added mdsvex`,
		`Added blogposts/blogpost page, and wrote the first blogpost`,
	],
}, {
	version: "1.7.0",
	date: "2023-05-07",
	changeDescriptions: [
		`Restructured speedruns data`,
		`Added the <code>activateOnSubMatch</code> props to <code>Link</code>`,
		`Delete the <code>+page.js</code> files (data now loaded directly in the <code>+page.svelte</code> files instead)`,
		`Added the game page`,
		`Show latest speedrun on start page`,
	],
}, {
	version: "1.6.0",
	date: "2023-05-01",
	changeDescriptions: [
		`Added 3 speedruns`,
		`Dynamically compute latest version in Footer`,
		`On the speedruns page, show time in better format`,
	],
}, {
	version: "1.5.0",
	date: "2023-04-15",
	changeDescriptions: [
		`Added 4 speedruns`,
		`Made time in speedrun optional (hours set to 999)`,
		`Removed unused CSS rules`,
	],
}, {
	version: "1.4.0",
	date: "2023-02-28",
	changeDescriptions: [
		`Added speedrun`,
	],
}, {
	version: "1.3.0",
	date: "2023-02-26",
	changeDescriptions: [
		`Added speedrun`,
	],
}, {
	version: "1.2.0",
	date: "2023-02-22",
	changeDescriptions: [
		`Made the changelog page dynamic`,
		`Added the speedrun page`,
		`Added 2 speedruns`,
	],
}, {
	version: "1.1.1",
	date: "2023-02-21",
	changeDescriptions: [
		`Changed it so it runs on <a href="https://peterlg.se/" target="_blank">peterlg.se</a> instead of <a href="https://peppel-g.github.io/peterlg" target="_blank">peppel-g.github.io/peterlg</a>`,
	],
}, {
	version: "1.1.0",
	date: "2023-02-15",
	changeDescriptions: [
		`Made it deployable to <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>`,
	],
}, {
	version: "1.0.0",
	date: "2023-02-12",
	changeDescriptions: [
		`Added start page with latest project`,
		`Added projects page (for now only one project; the project for this website)`,
		`Added project page (view project with specific id)`,
		`Added about page`,
		`Added changelog page`,
	],
}]