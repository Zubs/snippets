/**
 * Determine if both Kangaroos will meet at a same place
 * @param x1 { number } Initial x-coordinate of the first Kangaroo
 * @param v1 { number } Velocity of the first Kangaroo
 * @param x2 { number } Initial x-coordinate of the second Kangaroo
 * @param v2 { number } Velocity of the second Kangaroo
 */
function kangaroo (x1: number, v1: number, x2: number, v2: number): string {

    if ((x1 > x2 && v1 > v2) || (x1 < x2 && v1 < v2)) return 'NO'

    if ((x1 === x2) && (v1 < v2 || v1 > v2)) return 'NO'

    if ((v1 === v2) && (x1 > x2 || x1 < x2)) return 'NO'

    return 'YES'
}

console.log(kangaroo(2, 1, 1, 2))
console.log(kangaroo(0, 3, 4, 2))
console.log(kangaroo(0, 2, 5, 3))
