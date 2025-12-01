const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
let cnt = 0;

const mergeSort = (p, r) => {
  if (p < r) {
    const q = Math.floor((p + r) / 2);
    mergeSort(p, q);
    mergeSort(q + 1, r);
    merge(p, q, r);
  }
};

const merge = (p, q, r) => {
  let i = p;
  let j = q + 1;
  const tmp = [];
  while (i <= q && j <= r) {
    if (a[i] <= a[j]) {
      tmp.push(a[i++]);
    } else {
      tmp.push(a[j++]);
    }
  }
  while (i <= q) {
    tmp.push(a[i++]);
  }
  while (j <= r) {
    tmp.push(a[j++]);
  }
  i = p;
  let t = 0;
  while (i <= r) {
    const tg = tmp[t];
    a[i++] = tmp[t++];
    cnt++;
    if (cnt === k) {
      console.log(tg);
      process.exit();
    }
  }
};

mergeSort(0, n - 1);

if (cnt < k) {
  console.log(-1);
}
