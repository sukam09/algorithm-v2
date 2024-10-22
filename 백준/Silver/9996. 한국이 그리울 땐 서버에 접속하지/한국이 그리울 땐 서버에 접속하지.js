const input = require('fs').readFileSync(0).toString().trim().split('\n');
let n = +input[0];
const p = input[1];
let idx = 2;
let ans = '';

const solve = s => {
  // d*d -> d (X)
  if (s.length < p.length - 1) {
    return 0;
  }

  let pi = 0;
  while (p[pi] !== '*') {
    if (pi >= s.length || p[pi] !== s[pi]) {
      return 0;
    }
    pi++;
  }
  pi = p.length - 1;
  let si = s.length - 1;
  while (p[pi] !== '*') {
    if (si < 0 || p[pi] !== s[si]) {
      return 0;
    }
    pi--;
    si--;
  }
  return 1;
};

while (n--) {
  const s = input[idx++];
  const ret = solve(s);
  ans += ret === 1 ? 'DA\n' : 'NE\n';
}
console.log(ans);