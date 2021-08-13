function repeatedString(s: string, n: number): number {

    let letters = s.split('')
    let newString: string[] = []
    let count: number = 0

    let length = letters.length

    for (let i = 0; i < n; i++) {
        if (i < length) {
            newString.push(letters[i])
        } else {
            let index = i % 3
            newString.push(letters[index])
        }
    }

    newString.forEach((letter) => {
        if (letter === 'a') {
            count++
        }
    })
    
    return count
}

console.log(repeatedString("ada", 10))
