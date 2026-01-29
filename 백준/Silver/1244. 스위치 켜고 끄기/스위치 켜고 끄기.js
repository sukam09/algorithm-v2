const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const n = +input[0];
const switches = input[1].split(' ').map(Number);
const OOB = x => x < 0 || x >= n;
for (let i = 3; i < input.length; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  // 1-index to 0-index
  if (a === 1) {
    // 남학생
    for (let j = b - 1; j < n; j += b) {
      switches[j] = 1 - switches[j];
      // console.log('bj', b, j);
    }
  } else {
    // 여학생
    b--;
    switches[b] = 1 - switches[b];
    let b1 = b - 1;
    let b2 = b + 1;
    while (true) {
      if (OOB(b1) || OOB(b2) || switches[b1] !== switches[b2]) {
        break;
      }
      switches[b1] = 1 - switches[b1];
      switches[b2] = 1 - switches[b2];
      b1 -= 1;
      b2 += 1;
    }
  }
  // console.log(switches);
}

let count = 0;
let ans = '';
while (count < n) {
  ans += switches[count] + ' '; // line별 마지막 공백 때문에 틀릴수도
  count++;
  if (count > 0 && count % 20 === 0) {
    ans += '\n';
  }
}
console.log(ans);
