"use strict";
var userDOB = document.querySelector('#dob');
var days = userDOB.value.split("-");
var calculateDays = function () {
    console.log(userDOB);
};
// function calculateDays(birthday) { // birthday is a date
//     var ageDifMs = Date.now() - birthday.getTime();
//     var ageDate = new Date(ageDifMs); // miliseconds from epoch
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }
