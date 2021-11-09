"use strict";
function chunkArrayInGroups(arr, size) {
    let arrays = [];
    while (arr) {
        let x = arr.splice(0, size);
        arrays.push([...x]);
        if (arr.length === 0)
            break;
    }
    return arrays;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
