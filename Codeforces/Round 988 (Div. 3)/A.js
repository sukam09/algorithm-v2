const input = require('fs').readFileSync(0).toString().trim().split('\n');
let t = +input[0];
let n, a;
let idx = 1;
let ans = '';

const solve = () => {
  let ret = 0;
  a.sort((a, b) => a - b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      ret++;
      i++;
    }
  }
  ans += ret + '\n';
};

while (t--) {
  n = +input[idx++];
  a = input[idx++].split(' ').map(v => +v);
  solve();
}

console.log(ans);
