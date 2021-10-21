function maximumToys(prices: number[], k: number): number {

    let max: number = 0
    let sum: number = 0
    prices = prices.sort((a, b) => a - b)

    prices.forEach((item) => {
        if (sum + item < k) {
            sum += item
            max++
        }
    })

    return max
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))
