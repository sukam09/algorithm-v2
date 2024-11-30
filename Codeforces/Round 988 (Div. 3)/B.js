const input = require('fs').readFileSync(0).toString().trim().split('\n');
let t = +input[0];
let n, a;
let idx = 1;
let ans = '';
let b;

const solve = () => {
  b = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    b[a[i]]++;
  }
  const tg = n - 2;
  for (let i = 0; i < n; i++) {
    const tg2 = tg / a[i];
    if (!b[tg2]) continue;
    let ok = 0;
    if (a[i] === tg2) {
      if (b[tg2] >= 2) ok = 1;
    } else {
      ok = 1;
    }
    if (ok) {
      ans += a[i] + ' ' + tg2 + '\n';
      break;
    }
  }
};

while (t--) {
  n = +input[idx++];
  a = input[idx++].split(' ').map(v => +v);
  solve();
}

console.log(ans);
