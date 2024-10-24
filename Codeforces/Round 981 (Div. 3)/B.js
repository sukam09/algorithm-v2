const input = require('fs').readFileSync(0).toString().trim().split('\n');
let t = +input[0];
let idx = 1;
let nn;
const OOB = (x, y) => x < 0 || x >= nn || y < 0 || y >= nn;
let ans = '';
while (t--) {
  let n = +input[idx++];
  nn = n;
  const board = [];
  while (n--) {
    const line = input[idx++].split(' ').map(v => +v);
    board.push(line);
  }
  n = nn;
  // (n - 1, 0) -> (1, 0)
  let ret = 0;
  for (let i = n - 1; i >= 1; i--) {
    let x = i;
    let y = 0;
    let mn = 999999;
    while (1) {
      if (OOB(x, y)) break;
      if (board[x][y] < mn) {
        mn = board[x][y];
      }
      x++;
      y++;
    }
    if (mn < 0) {
      ret += -mn;
    }
  }
  // (0, 0) -> (0, n - 1)
  for (let j = 0; j < n; j++) {
    let x = 0;
    let y = j;
    let mn = 999999;
    while (1) {
      if (OOB(x, y)) break;
      if (board[x][y] < mn) {
        mn = board[x][y];
      }
      x++;
      y++;
    }
    if (mn < 0) {
      ret += -mn;
    }
  }
  ans += ret + '\n';
}
console.log(ans);