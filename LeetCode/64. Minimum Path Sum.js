/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = [...Array(m)].map(() => Array(n).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      dp[i][j] = grid[i][j];
      let down = Infinity;
      let right = Infinity;
      if (i > 0) {
        down = dp[i - 1][j];
      }
      if (j > 0) {
        right = dp[i][j - 1];
      }
      dp[i][j] += Math.min(down, right);
    }
  }
  return dp[m - 1][n - 1];
};
