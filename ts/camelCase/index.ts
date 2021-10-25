/**
 * Returns number of words in a camelCased string.
 * @param s String to be examined.
 */
function camelcase(s: string): number {

    let count = 0

    s.split('').forEach((letter, index) => {
        if (index === 0) {
            count++
        } else {
            if (letter.toUpperCase() === letter) {
                count++
            }
        }
    })

    return count
}

console.log(camelcase('saveChangesInTheEditor'))