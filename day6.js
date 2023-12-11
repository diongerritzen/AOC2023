function parseInput(input) {
	return input
		.split('\n')
		.map(row => row
			.split(' ')
			.slice(1)
			.filter(x => x.length)
			.map(n => Number(n))
		);
}

function getNumRecordBeatings(time, distanceRecord) {
	let result = 0;
	for (let i = Math.floor(time / 2); i > 0; i--) { // start at half time, since distances will be symmetrical
		let distance = (time-i) * i;
		if (distance <= distanceRecord)
			break;
		result++;
	}
	return result * 2 - (1 - time%2);
}

function determineMarginOfError(times, distances) {
	return times
		.map((time, i) => getNumRecordBeatings(time, distances[i]))
		.reduce((acc, cur) => acc * cur, 1);
}

function returnDay6Part1Result(input) {
	return determineMarginOfError(...parseInput(input));
}

function parseInputWithoutSpaces(input) {
	return input
		.split('\n')
		.map(row => row
			.split(':')
			.slice(1)
			.map(n => Number(n.replaceAll(' ', '')))
		);
}

function returnDay6Part2Result(input) {
	return determineMarginOfError(...parseInputWithoutSpaces(input));
}

const day6InputEx = `Time:      7  15   30
Distance:  9  40  200`;

const day6Input = `Time:        63     78     94     68
Distance:   411   1274   2047   1035`;