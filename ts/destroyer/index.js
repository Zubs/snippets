"use strict";
function destroyer(arr, ...args) {
    let input = arr;
    let toRemove = Array.from(arguments);
    toRemove.shift();
    toRemove.forEach((item) => {
        while (input.includes(item)) {
            input.splice(input.indexOf(item), 1);
        }
    });
    return input;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
