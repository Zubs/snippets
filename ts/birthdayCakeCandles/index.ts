/**
 * Returns number of occurrences of the highest number in the array.
 * @param candles Array of numbers.
 */
const birthdayCakeCandles = (candles: number[]): number => {

    let count = 0;
    const max = Math.max(...candles)

    candles.forEach((candle) => { candle === max ? count++ : '' })

    return count;
};

console.log(birthdayCakeCandles([3, 2, 1, 3]));