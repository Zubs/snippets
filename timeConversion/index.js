"use strict";
function timeConversion(s) {
    let AmOrPm = s.substr(8, 2);
    let time = s.slice(0, 8);
    let timeArray = time.split(':');
    const hours = timeArray[0];
    const minutes = timeArray[1];
    const seconds = timeArray[2];
    if (parseInt(hours) < 13) {
        if (AmOrPm === 'AM') {
            if (hours === '12') {
                return '00:' + minutes + ':' + seconds;
            }
            else {
                return s.substr(0, 8);
            }
        }
        else if (AmOrPm === 'PM') {
            if (hours === '12') {
                return '12:' + minutes + ':' + seconds;
            }
            else {
                return (parseInt(hours) + 12) + ':' + minutes + ':' + seconds;
            }
        }
        else {
            throw new Error('Invalid time format');
        }
    }
    else {
        throw new Error('Invalid time format: hours cannot be more than 12');
    }
}
console.log(timeConversion('07:05:45PM'));
