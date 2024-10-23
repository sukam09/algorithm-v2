const input = require('fs').readFileSync(0).toString().trim();
const arr = Array(26).fill(0);
// console.log(input);
for (const c of input) {
  arr[c.charCodeAt(0) - 'A'.charCodeAt(0)]++;
}
let cnt = 0;
// console.log(arr);
for (const c of 'MOBIS') {
  if (arr[c.charCodeAt(0) - 'A'.charCodeAt(0)] > 0) cnt++;
}
console.log(cnt >= 5 ? 'YES' : 'NO');