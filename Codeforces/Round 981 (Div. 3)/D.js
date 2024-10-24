const input = require('fs').readFileSync(0).toString().trim().split('\n');
let t = +input[0];
let idx = 1;
let ans = '';

while (t--) {
  const n = +input[idx++];
  const arr = [0, ...input[idx++].split(' ').map(v => +v)];
  const s = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    s[i] = s[i - 1] + arr[i];
  }
  const set = new Set();
  let cnt = 0;
  for (let i = 0; i <= n; i++) {
    if (set.has(s[i])) {
      cnt++;
      set.clear();
    }
    set.add(s[i]);
  }
  ans += cnt + '\n';
}
console.log(ans);
/*
누적합 배열을 만들 때 1-index로 만들어야 함에 주의하자
*/