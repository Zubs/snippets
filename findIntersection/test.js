"use strict";
const findIntersectionShorter = (strArr) => {
    var _a;
    return (_a = strArr[0].replace(/\s/g, '').split(',').filter(item => strArr[1].replace(/\s/g, '').split(',').includes(item)).toString()) !== null && _a !== void 0 ? _a : false;
};
console.log(findIntersectionShorter(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
console.log(findIntersectionShorter(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));
