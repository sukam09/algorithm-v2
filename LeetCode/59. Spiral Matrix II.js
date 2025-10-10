/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const ans = [...Array(n)].map(() => Array(n).fill(0));
  const vis = [...Array(n)].map(() => Array(n).fill(false));
  let x = 0;
  let y = 0;
  let dir = 0;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const OOB = (x, y) => x < 0 || x >= n || y < 0 || y >= n;
  let cur = 1;
  while (cur <= n * n) {
    ans[x][y] = cur++;
    vis[x][y] = true;
    let nx = x + dx[dir];
    let ny = y + dy[dir];
    if (OOB(nx, ny) || vis[nx][ny]) {
      dir = (dir + 1) % 4;
      nx = x + dx[dir];
      ny = y + dy[dir];
    }
    x = nx;
    y = ny;
  }
  return ans;
};
