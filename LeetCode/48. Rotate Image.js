/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  let k = 0;
  let l = n;
  /*
    5 -> 15 -> 16 -> 11
    2 -> 14 -> 7 -> 9
    start: k
    end: k + l - 1
  */
  while (l > 1) {
    for (let offset = 0; offset < l - 1; offset++) {
      const topleft = matrix[k + offset][k];
      matrix[k + offset][k] = matrix[k + l - 1][k + offset];
      matrix[k + l - 1][k + offset] = matrix[k + l - 1 - offset][k + l - 1];
      matrix[k + l - 1 - offset][k + l - 1] = matrix[k][k + l - 1 - offset];
      matrix[k][k + l - 1 - offset] = topleft;
    }
    k++;
    l -= 2;
  }
};
