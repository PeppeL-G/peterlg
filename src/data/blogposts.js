import SleepVsDelayContentComponent from './blogposts/sleep-vs-delay/content.md'
import OptimalInputComponentContentComponent from './blogposts/optimal-input-component/content.md'

export const blogposts = [{
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