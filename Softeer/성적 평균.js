const input = require('fs').readFileSync(0).toString().trim().split('\n');
let [n, k] = input[0].split(' ').map(v => +v);
const s = [0, ...input[1].split(' ').map(v => +v)];
const ps = Array(n + 1).fill(0); // prefix sum
let idx = 2;
let ans = '';
for (let i = 1; i <= n; i++) {
  ps[i] = ps[i - 1] + s[i];
}
while (k--) {
  const [a, b] = input[idx++].split(' ').map(v => +v);
  const sum = ps[b] - ps[a - 1];
  const num = b - a + 1;
  const avg = (sum / num).toFixed(2);
  ans += avg + '\n';
}
console.log(ans);