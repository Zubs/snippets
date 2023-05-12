function spiralOrder(matrix: number[][]): number[] {
  return getSpiral(matrix);
}

// 1st natural attempt
function getSpiral(input: number[][]): number[] {
  let matrixLength = input.length;
  const finalArray: number[] = [];
  const xArray: number[] = [];

  input.forEach((row, index) => {
    // Push first row as is
    if (index == 0) {
      finalArray.push(...row);
    }

    // Get final and initial element of other rows
    if (index !== 0 && index !== matrixLength - 1) {
      finalArray[row.length - 1 + index] = row[row.length - 1];
      xArray.push(row[0]);
    }

    // Push last row in reverse
    if (index == matrixLength - 1) {
      finalArray.push(...row.reverse());
    }
  });

  finalArray.push(...xArray);

  return finalArray;
}

function getRoundSpiral(input: number[][]): number[] {
  const rows = input.length;
  const columns = input[0].length;
  let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
  let finalArray = [];

  while (left <= right && top <= bottom) {
    // Move from left to right
    for (let i = left; i <= right; i++) {
      finalArray.push(input[top][i]);
    }

    // Increment top
    top++;

    // Move from top to bottom
    for (let i = top; i <= bottom; i++) {
      finalArray.push(input[i][right]);
    }

    // Decrement right
    right--;

    if (top > bottom) break;

    // Move from right to left
    for (let i = right; i >= left; i--) {
      finalArray.push(input[bottom][i]);
    }

    // Decrement bottom
    bottom--;

    if (left > right) break;

    // Move from bottom to top
    for (let i = bottom; i >= top; i--) {
      finalArray.push(input[i][left]);
    }

    // Increment left
    left++;
  }

  return finalArray;
}

// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // Returns [1,2,3,6,9,8,7,4,5]
// console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // Returns [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(getRoundSpiral([[1,2,3],[4,5,6],[7,8,9]])); // Returns [1,2,3,6,9,8,7,4,5]
