const input = require('fs').readFileSync(0).toString().trim().split('\n');
const a = input[0];
const b = input[1];
const n = a.length;
const m = b.length;

const d = [...Array(n + 1)].map(() => Array(m + 1).fill(0));
let ans = 0;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (a[i - 1] === b[j - 1]) {
      d[i][j] = d[i - 1][j - 1] + 1;
      ans = Math.max(ans, d[i][j]);
    }
  }
}
console.log(ans);
