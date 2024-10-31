const input = require('fs').readFileSync(0).toString().trim().split('\n');
let [v, e] = input[0].split(' ').map(v => +v);
let idx = 1;
const d = [...Array(v + 1)].map(() => Array(v + 1).fill(0x3f3f3f3f));
while (e--) {
  const [a, b, c] = input[idx++].split(' ').map(v => +v);
  d[a][b] = c;
}
for (let k = 1; k <= v; k++) {
  for (let i = 1; i <= v; i++) {
    for (let j = 1; j <= v; j++) {
      d[i][j] = Math.min(d[i][j], d[i][k] + d[k][j]);
    }
  }
}
let ans = 0x3f3f3f3f;
for (let i = 1; i <= v; i++) {
  if (d[i][i] === 0x3f3f3f3f) continue;
  ans = Math.min(ans, d[i][i]);
}
console.log(ans === 0x3f3f3f3f ? -1 : ans);