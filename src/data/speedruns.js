import { games } from "./games.js"

export const speedruns = games.flatMap(
	g => g.speedruns,
)

speedruns.sort(
	(a, b) => b.date.localeCompare(a.date)
)