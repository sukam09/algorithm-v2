const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));
const arr = input.slice(1);
const n = input[0][0];

let ans = Infinity;
let started = 0;

const backtrack = (k, s, b) => {
  if (!started) {
    started = 1;
  } else {
    ans = Math.min(ans, Math.abs(s - b));
  }

  if (k === n) {
    return;
  }
  for (let i = k; i < n; i++) {
    backtrack(i + 1, s * arr[i][0], b + arr[i][1]);
  }
};

backtrack(0, 1, 0);

console.log(ans);
