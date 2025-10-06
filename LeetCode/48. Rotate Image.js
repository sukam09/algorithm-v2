/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  let row = 0;
  let rowEnd = n - 1;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const top = [];
    for (let j = left; j <= right; j++) {
      top.push(matrix[row][j]);
    }

    let originalRow = rowEnd;
    for (let j = left; j <= right; j++) {
      matrix[row][j] = matrix[originalRow--][left];
    }

    let originalCol = right;
    for (let i = rowEnd; i >= row; i--) {
      matrix[i][left] = matrix[rowEnd][originalCol--];
    }

    originalRow = row;
    for (let j = right; j >= left; j--) {
      matrix[rowEnd][j] = matrix[originalRow++][right];
    }

    let index = 0;
    for (let i = row; i <= rowEnd; i++) {
      matrix[i][right] = top[index++];
    }

    [matrix[row][left], matrix[rowEnd][left]] = [
      matrix[rowEnd][left],
      matrix[row][left],
    ];

    row++;
    rowEnd--;
    left++;
    right--;
  }
};
