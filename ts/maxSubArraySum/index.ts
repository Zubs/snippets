function maxSubArraySum (numbers: number[], count: number): number {

    const length = numbers.length;
    let chunks: number[][] = [];
    let maxSum = 0;

    numbers.forEach((number, index) => {
        if (index + count < length + 1) chunks.push(numbers.slice(index, index + count));
    });

    chunks.forEach((chunk) => {
        let sum = 0;

        for (let i = 0; i < chunk.length; i++) sum += chunk[i];

        if (sum > maxSum) maxSum = sum;
    });

    return maxSum;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // Returns 19
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // Returns 13
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // Returns 6
