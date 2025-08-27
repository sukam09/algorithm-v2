const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));
const n = input[0][0];
const a = input[1];
const m = input[2][0];
const b = input[3];
a.sort((a, b) => b - a);
b.sort((a, b) => b - a);
let i = 0;
let j = 0;
let ans = 1;
while (1) {
  if (i === n || j === m) {
    i = 0;
    j = 0;
    ans++;
    continue;
  }

  if (a[i] >= b[j]) {
    i++;
    b.splice(j, 1);
    // console.log(ans, b);
    if (b.length === 0) break;
    // if (j === b.length) j = b.length - 1;
  } else if (i === 0) {
    // 다음 차례로 넘어갔는데 첫번째 크레인부터 안될 경우
    break;
  } else {
    j++;
  }
}

console.log(b.length === 0 ? ans : -1);
