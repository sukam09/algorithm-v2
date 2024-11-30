const insertionSort = () => {
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
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
insertionSort();
let ans = '';
for (let i = 0; i < n; i++) {
  ans += arr[i] + '\n';
}
console.log(ans);