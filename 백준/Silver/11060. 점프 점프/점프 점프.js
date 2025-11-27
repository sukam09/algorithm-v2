const input = require('fs').readFileSync(0).toString().trim().split('\n');
const n = +input[0];
const a = input[1].split(' ').map(Number);

// console.log(n, a);

const d = Array(n).fill(Infinity);
d[0] = 0;

for (let i = 0; i < n; i++) {
  for (let j = 1; j <= a[i]; j++) {
    d[i + j] = Math.min(d[i + j], d[i] + 1);
  }
}

console.log(d[n - 1] === Infinity ? -1 : d[n - 1]);
