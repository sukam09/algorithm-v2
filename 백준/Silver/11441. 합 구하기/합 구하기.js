const input = require('fs').readFileSync(0).toString().trim().split('\n');
const n = +input[0];
const a = [0, ...input[1].split(' ').map(v => +v)];
let m = +input[2];
let idx = 3;
let ans = '';

const d = Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  d[i] = d[i - 1] + a[i];
}

while (m--) {
  const [i, j] = input[idx++].split(' ').map(v => +v);
  const ret = d[j] - d[i - 1];
  ans += ret + '\n';
}
console.log(ans);