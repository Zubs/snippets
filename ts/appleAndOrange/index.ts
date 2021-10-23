/**
 * Print the number of apples and oranges that land on Sam's house, each on a separate line.
 * @param s Starting point of Sam's house location.
 * @param t Ending location of Sam's house location.
 * @param a Location of the Apple tree.
 * @param b Location of the Orange tree.
 * @param apples Distances at which each apple falls from the tree.
 * @param oranges Distances at which each orange falls from the tree.
 */
function countApplesAndOranges (s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {

    let numApples = 0
    let numOranges = 0

    apples.forEach((apple) => {
        let spot = apple + a

        if (spot >= s && spot <= t) {
            numApples++
        }
    })

    oranges.forEach((orange) => {
        let spot = orange + b

        if (spot >= s && spot <= t) {
            numOranges++
        }
    })

    console.log(numApples)
    console.log(numOranges)
}
