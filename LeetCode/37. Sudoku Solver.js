/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const n = board.length;
  const arr1 = [...Array(n)].map(() => Array(n).fill(false));
  const arr2 = [...Array(n)].map(() => Array(n).fill(false));
  const arr3 = [...Array(n)].map(() => Array(n).fill(false));
  const targets = [];

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
        arr1[i][num] = true;
        arr2[j][num] = true;
        arr3[square][num] = true;
      } else {
        targets.push([i, j]);
      }
    }
  }

  let answer = false;

  const backtrack = index => {
    if (answer) {
      return;
    }
    if (index === targets.length) {
      answer = true;
      return;
    }
    const [row, col] = targets[index];
    const square = getSquare(row, col);
    for (let num = 1; num <= 9; num++) {
      if (arr1[row][num] || arr2[col][num] || arr3[square][num]) {
        continue;
      }
      arr1[row][num] = true;
      arr2[col][num] = true;
      arr3[square][num] = true;
      board[row][col] = String(num);
      backtrack(index + 1);
      arr1[row][num] = false;
      arr2[col][num] = false;
      arr3[square][num] = false;
      if (answer) {
        return;
      }
      board[row][col] = '.';
    }
  };

  backtrack(0);
};
