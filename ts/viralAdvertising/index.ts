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
