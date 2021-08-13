"use strict";
function taskOfPairing(freq) {
    var count = 0;
    var realArray = [];
    var chunked = [];
    freq.forEach(function (item, index) {
        for (var i = 0; i < item; i++) {
            realArray.push(index + 1);
        }
    });
    for (var i = 0; i < realArray.length; i += 2) {
        chunked.push(realArray.slice(i, i + 2));
    }
    chunked.forEach(function (item) {
        if (item.length === 2) {
            if (item[1] - item[0] < 2) {
                count++;
            }
        }
    });
    return count;
}
console.log(taskOfPairing([3, 5, 4, 3]));
