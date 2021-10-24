"use strict";
function viralAdvertising(n) {
    var shared = 5;
    var liked = 0;
    var likes = 0;
    for (var i = 1; i < n + 1; i++) {
        liked = Math.floor(shared / 2);
        shared = liked * 3;
        likes += liked;
    }
    return likes;
}
console.log(viralAdvertising(3));
