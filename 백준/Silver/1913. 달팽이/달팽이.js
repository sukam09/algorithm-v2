const input = require('fs').readFileSync(0, 'utf8').trim().split('\n').map(Number);
const [n, k] = input;
// console.log(n, k);
const arr = [...Array(n)].map(() => Array(n).fill(0));
// console.log(arr);

let x = Math.floor(n / 2);
let y = x;
const origin = x;
let cur = 1;
// 상, 우, 하, 좌
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let dir = 0;
let xx;
let yy;
let step = 0;

function OOB(x, y, step) {
  return x < origin - step || x > origin + step || y < origin - step || y > origin + step;
}

while (cur <= n ** 2) {
  // console.log(cur, arr);
  if (cur === k) {
    xx = x;
    yy = y;
  }
  // console.log(x, y, dir, step);
  arr[x][y] = cur;
  let nx = x + dx[dir];
  let ny = y + dy[dir];
  if (OOB(nx, ny, step)) {
    // console.log('OOB!', nx, ny);
    if (cur === (1 + step * 2) ** 2) {
      step++;
    } else {
      dir = (dir + 1) % 4;
      nx = x + dx[dir];
      ny = y + dy[dir];
    }
  }
  cur++;
  x = nx;
  y = ny;
}

console.log(arr.map(line => line.join(' ')).join('\n'));
console.log(xx + 1, yy + 1);
