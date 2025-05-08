const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
let n = input[0];
const d = [...Array(10001)].map(() => Array(4).fill(0));
d[1][1] = 1;
d[2][1] = 1;
d[2][2] = 1;
d[3][1] = 1;
d[3][2] = 1;
d[3][3] = 1;
for (let i = 4; i <= 10000; i++) {
  d[i][1] = d[i - 1][1];
  d[i][2] = d[i - 2][1] + d[i - 2][2];
  d[i][3] = d[i - 3][1] + d[i - 3][2] + d[i - 3][3];
}
let i = 1;
let ans = '';
while (n--) {
  const x = input[i++];
  ans += d[x][1] + d[x][2] + d[x][3] + '\n';
}
console.log(ans);
