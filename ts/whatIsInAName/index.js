"use strict";
function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    let sourceKey = Object.keys(source)[0];
    let sourceValue = Object.values(source)[0];
    collection.forEach((item) => {
        let itemKeys = Object.keys(item);
        let itemValues = Object.values(item);
        itemKeys.forEach((key, index) => {
            if (key === sourceKey && itemValues[index] === sourceValue) {
                arr.push(item);
            }
        });
    });
    // Only change code above this line
    return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
