const input = require('fs').readFileSync(0).toString().trim().split('\n');
const n = +input[0];
let a = input[1].split(' ').map(Number);

for (let i = n - 2; i >= 0; i--) {
  if (a[i] > a[i + 1]) {
    let tgval = 0;
    let tgidx = -1;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[i] && a[j] > tgval) {
        tgval = a[j];
        tgidx = j;
      }
    }
    [a[i], a[tgidx]] = [a[tgidx], a[i]];
    a = [...a.slice(0, i + 1), ...a.slice(i + 1).sort((a, b) => b - a)];
    console.log(a.join(' '));
    process.exit();
  }
}
console.log(-1);
