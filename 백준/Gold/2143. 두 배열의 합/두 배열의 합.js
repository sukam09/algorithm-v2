const input = require('fs').readFileSync(0, 'utf8').split('\n');

// t, n, a, m, b

const t = +input[0];
const n = +input[1];
const m = +input[3];

const a = [0, ...input[2].split(' ').map(Number)];
const b = [0, ...input[4].split(' ').map(Number)];

const s1 = Array(n + 1).fill(0);
const s2 = Array(m + 1).fill(0);

/*
[1, 2, 3]
s = [0, 1, 3, 6]
a2 + a3 = s3 - s1
*/

for (let i = 1; i <= n; i++) {
  s1[i] = s1[i - 1] + a[i];
}
for (let i = 1; i <= m; i++) {
  s2[i] = s2[i - 1] + b[i];
}

const pairs = new Map();

for (let i = 0; i < s1.length; i++) {
  for (let j = i + 1; j < s1.length; j++) {
    const diff = s1[j] - s1[i];
    // console.log(i, j, diff);
    pairs.set(diff, (pairs.get(diff) || 0) + 1);
  }
}

// console.log(pairs);

let ans = 0;
for (let i = 0; i < s2.length; i++) {
  for (let j = i + 1; j < s2.length; j++) {
    const diff = s2[j] - s2[i];
    const target = t - diff;
    if (pairs.has(target)) {
      ans += pairs.get(target);
    }
  }
}
console.log(ans);
