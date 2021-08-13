"use strict";
function repeatedString(s, n) {
    var count = 0;
    var letters = s.split('');
    letters.forEach(function (letter) {
        if (letter === 'a') {
            count++;
        }
    });
    var times = Math.floor(n / letters.length);
    count = count * times;
    var rem = n % letters.length;
    for (var i = 0; i < rem; i++) {
        if (letters[i] === 'a') {
            count++;
        }
    }
    return count;
}
console.log(repeatedString("ada", 10));
