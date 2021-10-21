"use strict";
function convertToRoman(num) {
    let roman;
    let romanArray = [];
    if (num >= 4000 || num <= 0) {
        return false;
    }
    let thousand = Math.floor(num / 1000);
    let hundred = Math.floor((num % 1000) / 100);
    let ten = Math.floor((num % 100) / 10);
    let unit = num % 10;
    for (let i = 0; i < thousand; i++) {
        romanArray.push('M');
    }
    if (hundred < 4) {
        for (let i = 0; i < hundred; i++) {
            romanArray.push('C');
        }
    }
    else if (hundred === 4) {
        romanArray.push('CD');
    }
    else if (hundred === 5) {
        romanArray.push('D');
    }
    else if (hundred > 5 && hundred < 9) {
        romanArray.push('D');
        for (let i = 0; i < hundred - 5; i++) {
            romanArray.push('C');
        }
    }
    else {
        romanArray.push('CM');
    }
    if (ten < 4) {
        for (let i = 0; i < ten; i++) {
            romanArray.push('X');
        }
    }
    else if (ten === 4) {
        romanArray.push('XL');
    }
    else if (ten === 5) {
        romanArray.push('L');
    }
    else if (ten > 5 && ten < 9) {
        romanArray.push('L');
        for (let i = 0; i < ten - 5; i++) {
            romanArray.push('X');
        }
    }
    else {
        romanArray.push('XC');
    }
    if (unit < 4) {
        for (let i = 0; i < unit; i++) {
            romanArray.push('I');
        }
    }
    else if (unit === 4) {
        romanArray.push('IV');
    }
    else if (unit === 5) {
        romanArray.push('V');
    }
    else if (unit > 5 && unit < 9) {
        romanArray.push('V');
        for (let i = 0; i < unit - 5; i++) {
            romanArray.push('I');
        }
    }
    else {
        romanArray.push('IX');
    }
    roman = romanArray.join('');
    return roman;
}
convertToRoman(36);
console.log(convertToRoman(2894));
console.log(convertToRoman(2300));
