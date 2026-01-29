const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const n = +input[0];
const m = +input[1];
const arr = input[2].split(' ').map(Number);
let ans = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === m) {
      ans++;
    }
  }
}
console.log(ans);
