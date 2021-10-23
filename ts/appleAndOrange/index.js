"use strict";
/**
 * Print the number of apples and oranges that land on Sam's house, each on a separate line.
 * @param s Starting point of Sam's house location.
 * @param t Ending location of Sam's house location.
 * @param a Location of the Apple tree.
 * @param b Location of the Orange tree.
 * @param apples Distances at which each apple falls from the tree.
 * @param oranges Distances at which each orange falls from the tree.
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var numApples = 0;
    var numOranges = 0;
    apples.forEach(function (apple) {
        var spot = apple + a;
        if (spot >= s && spot <= t) {
            numApples++;
        }
    });
    oranges.forEach(function (orange) {
        var spot = orange + b;
        if (spot >= s && spot <= t) {
            numOranges++;
        }
    });
    console.log(numApples);
    console.log(numOranges);
}
