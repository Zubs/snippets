"use strict";
/**
 * @param steps The number of steps on the hike
 * @param path A string describing the path
 * @returns { number } The number of valleys traversed
 */
function countingValleys(steps, path) {
    var valleysMoved = 0;
    var level = 0;
    const paths = path.split('');
    paths.forEach((path) => {
        if (path === 'D') {
            if (level === 0) {
                valleysMoved++;
            }
            level--;
        }
        else if (path === 'U') {
            level++;
        }
    });
    return valleysMoved;
}
console.log(countingValleys(8, 'UDDDUDUU'));
console.log(countingValleys(10, 'DDUUDDUDUUUD'));
