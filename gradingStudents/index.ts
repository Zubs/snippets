function gradingStudents(grades: number[]): number[] {

    let output: number[] = [];

    grades.forEach((grade) => {
        const multiple = (Math.floor(grade / 5) * 5) + 5

        if (grade < 38 || multiple - grade >= 3) {
            output.push(grade)
        } else {
            output.push(multiple)
        }
    })

    return output;
}

console.log(gradingStudents([4, 73, 67, 38, 33]));
console.log(gradingStudents([84, 29, 57]));