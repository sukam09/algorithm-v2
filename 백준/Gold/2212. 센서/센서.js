const input = require('fs').readFileSync(0).toString().trim().split('\n');
const n = +input[0];
const k = +input[1];
const a = input[2].split(' ').map(Number);
const b = [];
a.sort((a, b) => a - b);
for (let i = 1; i < a.length; i++) {
  b.push(a[i] - a[i - 1]);
}
b.sort((a, b) => b - a);
let ans = 0;
for (let i = k - 1; i < b.length; i++) {
  ans += b[i];
}
console.log(ans);
