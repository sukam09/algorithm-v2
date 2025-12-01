const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
// console.log(n, k);
const s = input[1];
// console.log(s);
const vis = Array(n).fill(0);
let ans = 0;
for (let i = 0; i < n; i++) {
  if (s[i] === 'P') {
    for (let j = i - k; j <= i + k; j++) {
      if (j < 0 || j >= n || s[j] === 'P' || vis[j]) {
        continue;
      }
      vis[j] = 1;
      ans++;
      break;
    }
  }
}
// console.log(vis);
console.log(ans);
