function taskOfPairing (freq: number[]): number {

    let count: number = 0
    let realArray: number[] = []
    let chunked: number[][] = []

    freq.forEach((item, index) => {
        for (let i = 0; i < item; i++) {
            realArray.push(index + 1)
        }
    })

    for (let i = 0; i < realArray.length; i += 2) {
        chunked.push(realArray.slice(i, i + 2))
    }

    chunked.forEach((item) => {
        if (item.length === 2) {
            if (item[1] - item[0] < 2) {
                count++
            }
        }
    })

    return count
}

console.log(taskOfPairing([3, 5, 4, 3]))