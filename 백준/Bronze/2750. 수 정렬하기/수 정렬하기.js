const selectionSort = () => {
  for (let i = 0; i < n; i++) {
    let mnidx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[mnidx]) mnidx = j;
    }
    swap(i, mnidx);
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
selectionSort();
let ans = '';
for (let i = 0; i < n; i++) {
  ans += arr[i] + '\n';
}
console.log(ans);