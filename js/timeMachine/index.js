class Time {
    constructor(leap) {
        this.months = {
            Jan: 31,
            Feb: leap ? 29 : 28,
            Mar: 31,
            April: 30,
            May: 31,
            June: 30,
            July: 31,
            Aug: 31,
            Sept: 30
        };
    };
}

const timeInterval = (year) => {
    const date = 256;
    let sum = 0;
    let month;
    let result;
    let time = new Time(false);

    if ((year % 400 === 0) || (year % 4 === 0 && !(year % 100 === 0)) || !(year >= 1917)) {
        time = new Time(true);
    }

    for (let keys in time.months) {
        sum += time.months[keys];
        month = Object.keys(time.months).length;

        if (sum > date) sum -= time.months.Sept;

        result = `${date - sum}.${month}.${year}`;
    }
    return result;
}

console.log(timeInterval(2017));
console.log(timeInterval(2016));
console.log(timeInterval(1800));
console.log(timeInterval(1917));
console.log(timeInterval(2005));

