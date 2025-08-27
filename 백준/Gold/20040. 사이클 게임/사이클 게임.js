const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));
const [n, m] = input[0];

const p = Array(n).fill(-1);

const find = x => {
  if (p[x] < 0) return x;
  return (p[x] = find(p[x]));
};

const uni = (x, y) => {
  let u = find(x);
  let v = find(y);
  if (u === v) return 0;
  if (p[v] < p[u]) [u, v] = [v, u];
  if (p[u] === p[v]) p[u]--;
  p[v] = u;
  return 1;
};

for (let i = 1; i < input.length; i++) {
  const [u, v] = input[i];
  if (find(u) === find(v)) {
    console.log(i);
    process.exit();
  }
  uni(u, v);
}
console.log(0);
