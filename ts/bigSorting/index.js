"use strict";
/**
 * bigSorting
 * @param unsorted Unsorted array of numeric strings
 * @returns { Array } sorted array of numeric strings
 */
function bigSorting(unsorted) {
    let unsortedStr = [];
    let sorted = [];
    unsorted.forEach((strNumber) => {
        unsortedStr.push(parseInt(strNumber));
    });
    unsortedStr.sort((a, b) => {
        return a - b;
    });
    unsortedStr.forEach((intNumber) => {
        sorted.push(BigInt(intNumber).toLocaleString());
    });
    return sorted;
}
console.log(bigSorting(['31415926535897932384626433832795', '1', '3', '10', '3', '5']));
