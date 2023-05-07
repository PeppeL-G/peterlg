export function speedrunTimeToString(time) {
	if (time.hours == 999) {
		return `??:??:??`;
	}

	const hh = time.hours.toString().padStart(2, "0");
	const mm = time.minutes.toString().padStart(2, "0");
	const ss = time.seconds.toString().padStart(2, "0");

	return `${hh}:${mm}:${ss}`;
}