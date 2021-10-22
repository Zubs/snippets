/**
 * Expresses a number as a sum of prime numbers
 * @param value Number to be simplified
 */
function listSum (value: number): string | null {

    let half = Math.floor(value / 2)

    for (let i = 1; i < half; i++) {
        if (isPrime(i)) {
            if (isPrime(value - i)) {
                return `${ value - i } + ${ i }`
            }
        }
    }

    return null
}

function isPrime (value: number): boolean {
    let half = Math.floor(value / 2)

    for (let i = 2; i < half; i++) {
        if (half % i === 0) {
            return false
        }
    }

    return true
}
