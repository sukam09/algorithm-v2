const input = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .map(v => +v);

const n = input[0];
const arr = Array(1000005);
const tmp = Array(1000005);

for (let i = 1; i < input.length; i++) {
  arr[i - 1] = input[i];
}

const mergeSort = (st, en) => {
  if (en === st + 1) return;
  const mid = Math.floor((st + en) / 2);
  mergeSort(st, mid);
  mergeSort(mid, en);
  merge(st, en);
};

const merge = (st, en) => {
  const mid = Math.floor((st + en) / 2);
  let lidx = st;
  let ridx = mid;
  for (let i = st; i < en; i++) {
    if (ridx === en) tmp[i] = arr[lidx++];
    else if (lidx === mid) tmp[i] = arr[ridx++];
    else if (arr[lidx] <= arr[ridx]) tmp[i] = arr[lidx++];
    else tmp[i] = arr[ridx++];
  }
  for (let i = st; i < en; i++) arr[i] = tmp[i];
};

mergeSort(0, n);
let ans = '';
for (let i = 0; i < n; i++) {
  ans += arr[i] + '\n';
}
console.log(ans);