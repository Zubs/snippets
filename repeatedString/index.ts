function repeatedString(s: string, n: number): number {

    let count: number = 0

    let letters = s.split('')

    letters.forEach((letter) => {
        if (letter === 'a') {
            count++
        }
    })

    let times = Math.floor(n / letters.length)
    count = count * times

    let rem = n % letters.length
    for (let i = 0; i < rem; i++) {
        if (letters[i] === 'a') {
            count++
        }
    }

    return count
}

console.log(repeatedString("ada", 10))
