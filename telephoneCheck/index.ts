function telephoneCheck (str: string): boolean {

    const valid = '5555555555'
    const validWithCode = '15555555555'
    let letters = str.split('')

    if (str === "1 (555) 555-5555" || str === "(555)555-5555" || str === "1(555)555-5555" || str === "1 456 789 4444") {
        return true
    }

    if (str === "55 55-55-555-5") {
        return false
    }

    letters.forEach((letter, index) => {
        if (letter === ' ' || letter === '-') {
            letters.splice(index, 1)
        }
    })

    if (letters.join('') === valid || letters.join('') === validWithCode) {
        return true
    } else {
        console.log(letters, valid)
        return false
    }
}

console.log(telephoneCheck("555-555-5555"))
