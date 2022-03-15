// check if each number is circle number
const isCircleNumber = (number = 0) => {
	const value = number.toString();
	if (value.length === 1) {
		return true;
	} else if (value[0] === value[value.length - 1]) {
		return true;
	} else {
		return false;
	}
};

// check input validity
const isValidInput = (L, R) => {
	return L >= 1 && R >= L && R <= Math.pow(10, 18);
};

// check all number
const getCircleNumber = (L, R) => {
	if (!isValidInput(L, R)) {
		console.log("Input not valid: 1 <= L <= R <= 10^18 ");
		return;
	}
	let number = L;
	let count = 0;

	while (number <= R) {
		if (isCircleNumber(number)) {
			count++;
		}
		number++;
	}

	return count;
};

const L = 3;
const R = 2;

const count = getCircleNumber(L, R);

console.log("count", count);
