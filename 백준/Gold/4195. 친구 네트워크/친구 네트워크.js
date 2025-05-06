const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' '));
let ans = '';
let p, map, idx;

const getId = x => {
  if (!map.has(x)) {
    map.set(x, idx++);
  }
  return map.get(x);
};

const find = x => {
  if (p[x] < 0) return x;
  return (p[x] = find(p[x]));
};

// union by rank 적용
const uni = (x, y) => {
  let u = find(x);
  let v = find(y);
  if (u === v) {
    ans += -p[u] + '\n';
    return 0;
  }
  if (p[v] < p[u]) {
    [u, v] = [v, u];
  }
  p[u] += p[v];
  p[v] = u;
  ans += -p[u] + '\n';
  return 1;
};

for (let i = 1; i < input.length; i++) {
  if (input[i].length === 1) {
    // initialization
    p = Array(200005).fill(-1);
    map = new Map();
    idx = 0;
  } else {
    const [x, y] = input[i];
    const xx = getId(x);
    const yy = getId(y);
    uni(xx, yy);
  }
}

console.log(ans);
