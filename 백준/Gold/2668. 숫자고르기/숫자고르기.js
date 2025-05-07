const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const n = input[0];
const adj = [...Array(n + 1)].map(() => []);
for (let i = 1; i <= n; i++) {
  adj[i].push(input[i]);
}
const vis = Array(n + 1).fill(0);
const finished = Array(n + 1).fill(0);
let cycles = [];

const dfs = (v, cur) => {
  vis[v] = 1;
  for (const nv of adj[v]) {
    if (!vis[nv]) dfs(nv, [...cur, nv]);
    else if (!finished[nv]) {
      // cycle
      // console.log('cycle', [...cur, nv]);
      const hist = [...cur, nv];
      for (let i = hist.length - 1; i >= 0; i--) {
        if (hist[i] === nv && i < hist.length - 1) break;
        cycles.push(hist[i]);
      }
      // console.log(cycles);
    }
  }
  finished[v] = 1;
};

for (let i = 1; i <= n; i++) {
  dfs(i, [i]);
}

let ans = '';
ans += cycles.length + '\n';
cycles.sort((a, b) => a - b);
ans += cycles.join('\n');
console.log(ans);
