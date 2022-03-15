// check input validity
const isValidInput = (numbers = []) => {
	const { length } = numbers;
	const validLength = length >= 3 && length <= Math.pow(10, 5);
	const validValues = numbers.every((n) => {
		return n <= Math.pow(10, 9);
	});
	if (!validLength) {
		console.log("Array length should be >= 3 and <= 10^5");
	}
	if (!validValues) {
		console.log("Each number should be <= 10^9");
	}
	return validLength && validValues;
};

// get max value
const getMaxValue = (numbers = []) => {
	if (!isValidInput(numbers)) {
		return;
	}
	// find 3 max number of original array
	const copiedNumbers = [...numbers];
	copiedNumbers.sort((a, b) => b - a);
	const sortedNumbers = [
		copiedNumbers[0],
		copiedNumbers[1],
		copiedNumbers[2],
	];

	// store largest numbers by order of original array
	const largestNumbers = [];
	for (let i = 0; i < numbers.length; i++) {
		const n = numbers[i];
		if (sortedNumbers.includes(n)) {
			largestNumbers.push(n);
		}
	}

	// calculate
	const final = largestNumbers.reduce((prev, next, index) => {
		return prev + next * (index + 1);
	}, 0);

	return final;
};

const numbers = [-1, 2, -2, -3, 5];

const maxValue = getMaxValue(numbers);

console.log({ maxValue });
