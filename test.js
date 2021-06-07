let numbers = [20, 90, 10, 324, 9, 73];

let smallest = Math.min(...numbers);

console.log(`The smallest is ${ smallest }`);

let index = numbers.indexOf(smallest);

console.log(index);
