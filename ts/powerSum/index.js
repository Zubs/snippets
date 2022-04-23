"use strict";
/**
 *
 * @param arr
 * @param index
 */
// function powerSum(X: number, N: number): number {
//
//     let ways = 0;
//     let values: number[] = [];
//
//     for (let i = 1; i < X; i++) {
//         let power = Math.pow(i, N);
//
//         if (power < X) {
//             let diff = X - power;
//             let rootDiff = Math.pow(diff, 1/ N)
//
//             if (rootDiff % 1 == 0) {
//                 if (values.includes(i) && values.includes(rootDiff)) {
//                     continue;
//                 }
//
//                 values.push(i, rootDiff);
//                 ways += 1;
//             }
//         }
//     }
//
//     return ways;
// }
const arrayWithoutElementAtIndex = function (arr, index) {
    return arr.filter(function (value, arrIndex) {
        return /*index !== arrIndex && */ index < arrIndex;
    });
};
function powerSum(X, N) {
    let ways = 0;
    let poweredNums = [];
    for (let i = 1; i < X + 1; i++)
        if (Math.pow(i, N) < X)
            poweredNums.push(Math.pow(i, N));
    poweredNums.forEach((num, index) => {
        let grouping = 1;
        let xx = arrayWithoutElementAtIndex(poweredNums, index);
        console.log(xx);
        // while (grouping <= xx.length) {
        //     for (let i = 0; i < xx.length; i += grouping) {
        //         const chunk = xx.slice(i, i + grouping);
        //
        //         let sum = chunk.reduce((a, b) => a + b, 0)
        //
        //         if (sum == X) ways += 1;
        //     }
        //
        //     grouping++;
        // }
    });
    return 1;
}
// console.log(powerSum(10, 2)); // Expect 1
console.log(powerSum(100, 2)); // Expect 3
// console.log(powerSum(100, 3)); // Expect 1
