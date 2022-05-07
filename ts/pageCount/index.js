"use strict";
/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */
function pageCount(n, p) {
    var frontDiff = p - 1;
    var backDiff = n - p;
    if (frontDiff < backDiff || frontDiff === backDiff)
        return Math.round(frontDiff / 2);
    else
        return Math.round(backDiff / 2);
}
console.log(pageCount(5, 3)); // Return 1
console.log(pageCount(6, 2)); // Return 1
console.log(pageCount(5, 4)); // Return 0
