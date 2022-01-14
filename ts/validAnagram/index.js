"use strict";
function validAnagram(word1, word2) {
    var arr1 = word1.split('');
    var arr2 = word2.split('');
    var str1 = arr1.sort().join('');
    var str2 = arr2.sort().join('');
    return str1 === str2;
}
console.log(validAnagram('cinema', 'iceman'));
