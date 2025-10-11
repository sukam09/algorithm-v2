/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const OOB = (x, y) => x < 0 || x >= m || y < 0 || y >= n;

  const orders = [];
  const visited = Array.from({ length: m }, () => Array(n).fill(false));

  // 우, 하, 좌, 상
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let dir = 0;

  let x = 0;
  let y = 0;

  while (orders.length < m * n) {
    orders.push(matrix[x][y]);
    visited[x][y] = true;
    let nx = x + dx[dir];
    let ny = y + dy[dir];
    if (OOB(nx, ny) || visited[nx][ny]) {
      dir = (dir + 1) % 4;
      nx = x + dx[dir];
      ny = y + dy[dir];
    }
    x = nx;
    y = ny;
  }

  return orders;
};
