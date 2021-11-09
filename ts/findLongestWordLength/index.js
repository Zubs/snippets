"use strict";
function findLongestWordLength(str) {
    const words = str.split(' ');
    let count = 0;
    words.forEach((word) => count = word.length > count ? word.length : count);
    return count;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
