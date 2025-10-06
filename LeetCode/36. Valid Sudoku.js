/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const n = board.length;
  const arr1 = [...Array(n)].map(() => Array(n).fill(false));
  const arr2 = [...Array(n)].map(() => Array(n).fill(false));
  const arr3 = [...Array(n)].map(() => Array(n).fill(false));

  const getSquare = (i, j) => {
    const row = Math.floor(i / 3);
    const col = Math.floor(j / 3);
    return 3 * row + col;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] !== '.') {
        const num = Number(board[i][j]);
        const square = getSquare(i, j);
        if (arr1[i][num] || arr2[j][num] || arr3[square][num]) {
          return false;
        }
        arr1[i][num] = true;
        arr2[j][num] = true;
        arr3[square][num] = true;
      }
    }
  }

  return true;
};
