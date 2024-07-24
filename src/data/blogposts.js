import SleepVsDelayContentComponent from './blogposts/sleep-vs-delay/content.md'
import OptimalInputComponentContentComponent from './blogposts/optimal-input-component/content.md'
import AiTheWebSaviourContentComponent from './blogposts/ai-the-web-saviour/content.md'

export const blogposts = [{
	id: `ai-the-web-killer`,
	title: `AI - The Web Saviour!`,
	dateWritten: `2024-??-??`,
	summary: `More and more people think that AI will kill the web. I rather think the opposite.`,
	ContentComponent: AiTheWebSaviourContentComponent,
}, {
	id: `sleep-vs-delay`,
	title: `sleep() VS delay()`,
	dateWritten: `2024-05-01`,
	summary: `What is the correct way of doing nothing? Here is an explanation of synchronous programming VS asynchronous programming when it comes to waiting.`,
	ContentComponent: SleepVsDelayContentComponent,
}, {
	id: `optimal-input-component`,
	title: `Optimal Input Component`,
	dateWritten: `2023-10-23`,
	summary: `How should a good input component function?`,
	ContentComponent: OptimalInputComponentContentComponent,
}]