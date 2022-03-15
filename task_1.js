// get number included in this array but excluded in other array
const getNumberExcluded = (arrayToCheck = [], arrayToCompare = []) => {
	const results = arrayToCheck.filter((x) => {
		return !arrayToCompare.includes(x);
	});
	return results;
};

// get number included in both array
const getNumberIncludedBoth = (arrayToCheck = [], arrayToCompare = []) => {
	const results = arrayToCheck.filter((x) => {
		return arrayToCompare.includes(x);
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
