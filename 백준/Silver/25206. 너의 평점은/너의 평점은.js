const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
// console.log(input);

const grades = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0,
};

let total = 0;
let count = 0;
for (const item of input) {
  const [_, b, c] = item.split(' ');
  // console.log(Number(b), grades[c]);
  if (c === 'P') continue;
  total += Number(b) * grades[c];
  count += Number(b);
}
const ans = total / count;
console.log(ans);
