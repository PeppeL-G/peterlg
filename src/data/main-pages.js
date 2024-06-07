import { changelogEntries } from "./changelog-entries.js"

export const mainPages = [{
	name: `Welcome!`,
	url: `/home/`,
	where: `navbar`,
}, {
	name: `Projects`,
	url: `/projects/`,
	where: `navbar`,
}, {
	name: `Blogposts`,
	url: `/blogposts/`,
	where: `navbar`,
}, {
	name: `Speedruns`,
	url: `/speedruns/`,
	where: `navbar`,
}, {
	name: `About`,
	url: `/about/`,
	where: `footer`,
}, {
	name: `Changelog`,
	linkName: `v${changelogEntries[0].version}`,
	url: `/changelog/`,
	where: `footer`,
}]