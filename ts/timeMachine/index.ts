function timeInterval (year: number): string {

    let days = 0;
    let daysTarget = 256;
    let result: [number, number, number] = [0, 0, year];

    let months: [string, number][] = [
        ["Jan", 31],
        ["Feb", 28],
        ["Mar", 31],
        ["Apr", 30],
        ["May", 31],
        ["Jun", 30],
        ["Jul", 31],
        ["Aug", 31],
        ["Sep", 30],
        ["Oct", 31],
        ["Nov", 30],
        ["Dec", 31]
    ];

    if ((year % 400 === 0) || (year % 4 === 0 && !(year % 100 === 0))) months[1][1] = 29;

    months.forEach((month, index) => {
        if (days < daysTarget && (days + month[1] < daysTarget)) days += month[1];
         else if (days < daysTarget && (days + month[1] > daysTarget)) {
            let day = month[1] - (daysTarget - days);
            days += month[1] - (daysTarget - days)
            result[0] = day;
            result[1] = index + 1
        }
    })

    return result.join('.');
}

console.log(timeInterval(2017));
console.log(timeInterval(2016));
console.log(timeInterval(1800));
