// get number included in this array but excluded in other array
const getNumberExcluded = (numbersToCheck = [], numbersToCompare = []) => {
	const results = numbersToCheck.filter((x) => {
		return !numbersToCompare.includes(x);
	});
	return results;
};

// check input validity
const isValidArray = (array = []) => {
	return array.length > 1 && array.length < Math.pow(10, 10);
};

const isValidInput = (numbersToCheck = [], numbersToCompare = []) => {
	return isValidArray(numbersToCheck) && isValidArray(numbersToCompare);
};

// get number included in both array
const getNumberIncludedBoth = (numbersToCheck = [], numbersToCompare = []) => {
	let valid = isValidInput(numbersToCheck, numbersToCompare);
	if (!valid) {
		console.log(
			"Input not valid: length each array should be > 1 and < 10^10"
		);
		return;
	}
	const results = numbersToCheck.filter((x) => {
		return numbersToCompare.includes(x);
	});
	return results;
};

const numberListA = [1, 2, 3, 4];
const numberListB = [2, 4, 6, 8];

// number included in array A but excluded in array B
const numberAExcludedInArrayB = getNumberExcluded(numberListA, numberListB);

// number included in array A but excluded in array B
const numberBExcludedInArrayA = getNumberExcluded(numberListB, numberListA);

// number included in both array
const numberIncludedInBothArray = getNumberIncludedBoth(
	numberListB,
	numberListA
);

console.log("numberAExcludedInArrayB :>> ", numberAExcludedInArrayB);
console.log("numberBExcludedInArrayA :>> ", numberBExcludedInArrayA);
console.log("numberIncludedInBothArray :>> ", numberIncludedInBothArray);
