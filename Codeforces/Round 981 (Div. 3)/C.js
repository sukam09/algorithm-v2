const input = require('fs').readFileSync(0).toString().trim().split('\n');
let t = +input[0];
let idx = 1;
let arr;
let ans = '';

const swap = (a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]]
};

while (t--) {
  const n = +input[idx++];
  arr = input[idx++].split(' ').map(v => +v);
  for (let i = 1; i < Math.floor(n / 2); i++) {
    if (arr[i] === arr[i - 1] || arr[n - 1 - i] === arr[n - i]) {
      swap(i, n - 1 - i);
    }
  }
  let cnt = 0;
  for (let i = 1; i < n; i++) {
    if (arr[i] === arr[i - 1]) cnt++;
  }
  ans += cnt + '\n';
}
console.log(ans);
/*
양옆에서부터 중앙으로 오면서 pair가 생기면 swap하면 됨
둘다 안생기거나 둘다 생겨도 상관 없음
-> <- 이런 식으로 오므로 각각 인접한 왼쪽, 오른쪽만 확인해도 됨
*/