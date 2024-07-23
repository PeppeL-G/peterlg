import peterlgDescriptionComponent from './projects/peterlg/content.md'
import jsmlDescriptionComponent from './projects/jsml/content.md'
import bagaworkDescriptionComponent from './projects/bagawork/content.md'

export const projects = [{
	id: "bagawork",
	title: "Bagawork",
	introduction: `Learning programming can be really hard and boring. Let's make it easier and more fun!`,
	DescriptionComponent: bagaworkDescriptionComponent,
	gitHubLink: "https://github.com/PeppeL-G/bagawork",
	websiteLink: "https://bagawork.com",
	datePosted: "2024-07-23",
}, {
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