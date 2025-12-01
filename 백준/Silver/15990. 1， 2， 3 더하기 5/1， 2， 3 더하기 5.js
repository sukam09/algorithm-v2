const input = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);
const d = [...Array(100001)].map(() => Array(3).fill(0));
const mod = 1000000009;
d[1][0] = 1;
d[2][1] = 1;
for (let j = 0; j <= 2; j++) {
  d[3][j] = 1;
}
// console.log(d);
for (let i = 4; i <= 100000; i++) {
  // 맨 끝에 붙는 숫자가
  // 1
  d[i][0] = (d[i - 1][1] + d[i - 1][2]) % mod;
  // 2
  d[i][1] = (d[i - 2][0] + d[i - 2][2]) % mod;
  // 3
  d[i][2] = (d[i - 3][0] + d[i - 3][1]) % mod;
}

let ans = '';
for (let i = 1; i < input.length; i++) {
  let val = 0;
  for (let j = 0; j <= 2; j++) {
    val += d[input[i]][j] % mod;
  }
  ans += (val % mod) + '\n';
}
console.log(ans);
