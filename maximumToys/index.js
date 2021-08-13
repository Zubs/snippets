"use strict";
function maximumToys(prices, k) {
    var max = 0;
    var sum = 0;
    prices = prices.sort(function (a, b) { return a - b; });
    prices.forEach(function (item) {
        if (sum + item < k) {
            sum += item;
            max++;
        }
    });
    return max;
}
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));
