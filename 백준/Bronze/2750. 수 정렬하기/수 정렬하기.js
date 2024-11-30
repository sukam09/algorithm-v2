const bubbleSort = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) swap(j, j + 1);
    }
  }
};

const swap = (a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
};

const input = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .map(v => +v);
const n = +input[0];
const arr = Array(n);
for (let i = 1; i <= n; i++) {
  arr[i - 1] = input[i];
}
bubbleSort();
let ans = '';
for (let i = 0; i < n; i++) {
  ans += arr[i] + '\n';
}
console.log(ans);