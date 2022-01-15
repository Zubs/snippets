function sumZero (numbers: number[]): [number, number] | undefined {

    let result: [number, number];

    numbers.forEach((number) => {
        if (!result && numbers.includes(0 - number)) {
            result = [number, 0 - number]
        }
    })

    return result ?? undefined;
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
