const findIntersection = (strArr: [string, string]): string | false => {
	
	// Make Arrays from list
	const list1Array: string[] = list1.split(', ');
	const list2Array: string[] = list2.split(', ');

	// Declare Target
	const finalArray: string[] = [];

	// Make Comparisons
	list1Array.forEach((item) => {
		if (list2Array.includes(item)) {
			finalArray.push(item)
		}
	});

	// Return response
	return (finalArray.length > 0) ? finalArray.toString() : false;
};

// First test
console.log(findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));

// Second Test
console.log(findIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));
