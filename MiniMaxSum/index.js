"use strict";
const miniMaxSum = (arr) => {
    arr = arr.sort();
    const output1 = arr.reduce((total, num) => { return total + num; }) - arr[0];
    const output2 = arr.reduce((total, num) => { return total + num; }) - arr[arr.length - 1];
    return `${output2} ${output1}`;
};
console.log(miniMaxSum([1, 2, 3, 4, 5]));
console.log(miniMaxSum([7, 69, 2, 221, 8974]));
