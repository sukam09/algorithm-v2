const input = require('fs').readFileSync(0).toString().trim().split('\n');
const n = +input[0];
const a = input[1].split(' ').map(Number);
if (n === 1) {
  console.log(a[0]);
  process.exit();
}
const d = [...Array(n + 1)].map(() => Array(2).fill(0));
d[0][0] = a[0];
d[0][1] = a[0];
let ans = a[0];

for (let i = 1; i < n; i++) {
  d[i][0] = Math.max(d[i - 1][0] + a[i], a[i]);
  d[i][1] = Math.max(d[i - 1][0], d[i - 1][1] + a[i]);
  ans = Math.max(ans, d[i][0], d[i][1]);
}
console.log(ans);
