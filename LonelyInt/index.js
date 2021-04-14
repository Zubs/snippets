"use strict";
const getOccurence = (array, value) => {
    let count = 0;
    array.forEach((item) => {
        if (item === value) {
            count++;
        }
    });
    return count;
};
const LonelyInt = (input) => {
    let answer = 0;
    input.forEach((item) => {
        if (getOccurence(input, item) === 1) {
            answer = item;
        }
    });
    return answer;
};
console.log(LonelyInt([1, 1, 2]));
console.log(LonelyInt([0, 0, 1, 2, 1]));
console.log(LonelyInt([1]));
