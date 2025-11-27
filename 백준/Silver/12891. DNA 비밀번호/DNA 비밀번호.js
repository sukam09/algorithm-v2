const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [s, p] = input[0].split(' ').map(Number);
const x = input[1];
const [a, c, g, t] = input[2].split(' ').map(Number);

const cur = Array(4).fill(0);

let st = 0;
let en = p - 1;

// console.log(s, p, x, a, c, g, t);

for (let i = 0; i <= en; i++) {
  if (x[i] === 'A') {
    cur[0]++;
  } else if (x[i] === 'C') {
    cur[1]++;
  } else if (x[i] === 'G') {
    cur[2]++;
  } else {
    cur[3]++;
  }
}

// console.log(cur);

let ans = 0;

while (en < s) {
  // console.log(st, en, cur);
  if (cur[0] >= a && cur[1] >= c && cur[2] >= g && cur[3] >= t) {
    ans++;
  }
  if (x[st] === 'A') {
    cur[0]--;
  } else if (x[st] === 'C') {
    cur[1]--;
  } else if (x[st] === 'G') {
    cur[2]--;
  } else {
    cur[3]--;
  }
  st++;
  en++;
  if (x[en] === 'A') {
    cur[0]++;
  } else if (x[en] === 'C') {
    cur[1]++;
  } else if (x[en] === 'G') {
    cur[2]++;
  } else {
    cur[3]++;
  }
}

console.log(ans);
