const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));
const arr = input.slice(1);
const n = input[0][0];

// console.log(n, arr);

let ans = Infinity;
const vis = Array(n).fill(0);
let started = 0;

const backtrack = (k, s, b) => {
  // console.log(k, s, b, vis);
  if (!started) {
    started = 1;
  } else {
    ans = Math.min(ans, Math.abs(s - b));
  }

  if (k === n) {
    return;
  }
  for (let i = k; i < n; i++) {
    if (vis[i]) {
      continue;
    }
    vis[i] = 1;
    backtrack(i + 1, s * arr[i][0], b + arr[i][1]);
    vis[i] = 0;
  }
};

backtrack(0, 1, 0);

console.log(ans);
