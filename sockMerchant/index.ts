const getOccurence = (array: number[], value: number): number => {
	
	let count: number = 0;
	
	array.forEach((item) => { item === value ? count++ : count = count });

	return count;
};

const sockMerchant = (numberOfSocks: number, socks: number[]): number | false => {
	
	// Confirm input is correct
	if (socks.length !== numberOfSocks) {
		return false;
	}

	let answer: number = 0;

	new Set(socks).forEach((item) => {
		answer += (Math.floor(getOccurence(socks, item) / 2));
	});

	return answer;
};

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));