"use strict";
function repeatedString(s, n) {
    var letters = s.split('');
    var newString = [];
    var count = 0;
    var length = letters.length;
    for (var i = 0; i < n; i++) {
        if (i < length) {
            newString.push(letters[i]);
        }
        else {
            var index = i % 3;
            newString.push(letters[index]);
        }
    }
    newString.forEach(function (letter) {
        if (letter === 'a') {
            count++;
        }
    });
    return count;
}
console.log(repeatedString("ada", 10));
