import { Temporal } from "@js-temporal/polyfill"

export const games = [{
	id: "zelda-2-the-adventure-of-link",
	name: "Zelda II: The Adventure of Link",
	consoleName: "NES",
	speedruns: [{
		consoleName: "Switch",
		date: "2023-04-11",
		time: Temporal.Duration.from({ hours: 999, minutes: 0, seconds: 0 }),
		comment: `Finished the game (all temples + final boss).`,
	}],
}, {
	id: "the-legend-of-zelda",
	name: "The Legend of Zelda",
	consoleName: "NES",
	speedruns: [{
		consoleName: "Switch",
		date: "2023-03-30",
		time: Temporal.Duration.from({ hours: 999, minutes: 0, seconds: 0 }),
		comment: `Finished the game (all temples + final boss).`,
	}],
}, {
	id: "yoshis-island",
	name: "Yoshi's Island",
	consoleName: "SNES",
	speedruns: [{
		consoleName: "Switch",
		date: "2023-03-05",
		time: Temporal.Duration.from({ hours: 999, minutes: 0, seconds: 0 }),
		comment: `Finished the game (beat the final boss).`,
	}, {
		consoleName: "Switch",
		date: "2023-04-10",
		time: Temporal.Duration.from({ hours: 999, minutes: 0, seconds: 0 }),
		comment: `Finished the game to 100%.`,
	}],
}, {
	id: "donkey-kong-country",
	name: "Donkey Kong Country",
	consoleName: "SNES",
	speedruns: [{
		consoleName: "Switch",
		date: "2023-02-26",
		time: Temporal.Duration.from({ hours: 1, minutes: 10, seconds: 21 }),
		comment: `I think I died like 20 times, but only 3 times on King K. Rool, so good progress since last play :)`,
	}, {
		consoleName: "Switch",
		date: "2023-02-20",
		time: Temporal.Duration.from({ hours: 1, minutes: 18, seconds: 35 }),
		comment: `Died many times, and way too many times on King K. Rool than I want to admit xD But no game over 8)`,
	}],
}, {
	id: "super-mario-bros",
	name: "Super Mario Bros.",
	consoleName: "NES",
	speedruns: [{
		consoleName: "Switch",
		date: "2023-02-28",
		time: Temporal.Duration.from({ minutes: 7, seconds: 58 }),
		comment: `Died two times on 1-2, and 2 times on 8-3, but managed to beat the final level on first try 8)`,
	}, {
		consoleName: "Switch",
		date: "2023-02-22",
		time: Temporal.Duration.from({ minutes: 10, seconds: 47 }),
		comment: `Gathered all extra lives I knew, and lucky was that, because I needed all of them xD Died 3-4 times on the final level, and a few times on 8-2 and 8-3, and got small on 4-2 :(`,
	}],
}]

for (const game of games) {
	for (const speedrun of game.speedruns) {
		speedrun.game = game
	}
}