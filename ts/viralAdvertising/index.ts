/**
 * Determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.
 * @param n The day number to report.
 */
function viralAdvertising (n: number): number {

    let shared = 5
    let liked = 0
    let likes = 0

    for (let i = 1; i < n + 1; i++) {
        liked = Math.floor(shared / 2)
        shared = liked * 3
        likes += liked
    }

    return likes
}

console.log(viralAdvertising(3))
