const input = require('fs').readFileSync(0).toString().trim().split('\n');
const n = +input[0];
const p = [0, ...input[1].split(' ').map(Number)];

const d = Array(n + 1).fill(Infinity);
for (let i = 1; i <= n; i++) {
  d[i] = p[i];
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    const val = d[j] * parseInt(i / j) + p[i % j];
    d[i] = Math.min(d[i], val);
  }
}

console.log(d[n]);
