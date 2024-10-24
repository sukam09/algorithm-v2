const input = require('fs').readFileSync(0).toString().trim().split('\n');
let t = +input[0];
let idx = 1;
let ans = '';

const solve = n => {
  let x = 0;
  let i = 1;
  let sign;
  while (x >= -n && x <= n) {
    let d = 2 * i - 1;
    sign = i % 2 === 1;
    if (sign) d *= -1;
    x += d;
    i++;
  }
  ans += sign ? 'Sakurako' : 'Kosuke';
  ans += '\n';
}

while (t--) {
  const n = +input[idx++];
  solve(n);
}
console.log(ans);
/*
사실 n이 홀수이면 Kosuke, 짝수이면 Sakurako라는 규칙이 있음
*/