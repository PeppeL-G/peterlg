import peterlgDescriptionComponent from './projects/peterlg/content.md'
import jsmlDescriptionComponent from './projects/jsml/content.md'

export const projects = [{
	id: "jsml",
	title: "JSML",
	introduction: `Why complicate things with JSX? Use JSML instead!`,
	DescriptionComponent: jsmlDescriptionComponent,
	gitHubLink: "https://github.com/PeppeL-G/jsml",
	websiteLink: "https://github.com/PeppeL-G/jsml?tab=readme-ov-file#jsml---javascript-markup-library",
	datePosted: "2024-04-14",
}, {
	id: "peterlg",
	title: "Peter L-G",
	introduction: `Everybody needs a personal website, right? Here is mine 🙂`,
	DescriptionComponent: peterlgDescriptionComponent,
	gitHubLink: "https://github.com/PeppeL-G/peterlg",
	websiteLink: "http://peterlg.se",
	datePosted: "2023-02-13",
}]