import type { Component } from "svelte"

// SvelteKit docs: https://svelte.dev/docs/kit/types#app.d.ts
declare global {
	
	type Blogpost = {
		id: string;
		title: string;
		dateWritten: string;
		summary: string;
	}
	
	type ChangelogEntry = {
		version: string;
		date: string;
		changeDescriptions: string[];
	}
	
	type Game = {
		id: string;
		name: string;
		consoleName: string;
		categories: GameCategory[];
	}
	
	type GameCategory = {
		id: string;
		name: string;
		description: string;
	}
	
	type Time = {
		hours: number;
		minutes: number;
		seconds: number;
	}
	
	type Project = {
		id: string;
		title: string;
		introduction: string;
		gitHubLink: string;
		websiteLink: string;
		datePosted: string;
	}
	
	type Speedrun = {
		id: number;
		gameId: string;
		consoleName: string;
		date: string;
		time: Temporal.Duration;
		comment: string;
		categoryId: string;
	}
	
	type MarkdownModule = {
		default: Component;
	}
	
	type MainPage = {
		name: string;
		url: string;
		where: string;
		linkName?: string;
	}
	
}

export {}
