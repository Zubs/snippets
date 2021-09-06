"use strict";
/*
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
function camelcase(s) {
    let count = 0;
    s.split('').forEach((letter, index) => {
        if (index === 0) {
            count++;
        }
        else {
            if (letter.toUpperCase() === letter) {
                count++;
            }
        }
    });
    return count;
}
console.log(camelcase('saveChangesInTheEditor'));
