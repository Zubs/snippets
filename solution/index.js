"use strict";
/**
 * Get lowest possible integer not in the array
 * @param arr Array of int
 * @returns Single int
 */
function getMinIntNotInArray(arr) {
    let maxValue = 0;
    for (let index = 1; index < Math.abs(Math.max(...arr)) + 1; index++) {
        if (!arr.includes(index)) {
            return index;
        }
        else {
            maxValue = index;
        }
    }
    return maxValue + 1;
}
console.log(getMinIntNotInArray([1, 3, 6, 4, 1, 2]));
console.log(getMinIntNotInArray([1, 2, 3]));
console.log(getMinIntNotInArray([-1, -3]));
