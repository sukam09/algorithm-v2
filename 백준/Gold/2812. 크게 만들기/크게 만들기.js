const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const num = input[1].split('').map(Number);

// console.log(n, k, num);

/*
10 4
4177252841

477252841
77252841
7752841
775841
*/

let left = 0;
let right = 1;
let count = 0;

while (right < num.length) {
  while (left >= 0) {
    if (num[left] === -1) {
      left--;
    } else if (num[left] < num[right]) {
      num[left] = -1;
      count++;
      left--;
      if (count === k) {
        // console.log(num, left, right);
        console.log(num.filter(v => v !== -1).join(''));
        process.exit();
      }
    } else {
      break;
    }
  }
  right++;
  left = right - 1;
}

for (let i = num.length - 1; i >= 0; i--) {
  if (num[i] === -1) {
    continue;
  }
  num[i] = -1;
  count++;
  if (count === k) {
    break;
  }
}
console.log(num.filter(v => v !== -1).join(''));
