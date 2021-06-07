"use strict";
const objectsToReduce = [
    { name: "A", parent: null },
    { name: "B", parent: "A" },
    { name: "C", parent: "B" },
    { name: "D", parent: "B" },
    { name: "E", parent: "A" },
];
// To remove B and it's children
objectsToReduce.forEach((obj, index) => {
    if (obj.name === 'B' || obj.parent === 'B') {
        objectsToReduce.splice(index, 1);
        // delete objectsToReduce[index];
    }
});
console.log(objectsToReduce);
