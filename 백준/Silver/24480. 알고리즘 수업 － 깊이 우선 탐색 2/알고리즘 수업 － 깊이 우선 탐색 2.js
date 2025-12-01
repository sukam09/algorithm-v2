const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const [n, m, r] = input[0].split(' ').map(Number);
const adj = [...Array(n + 1)].map(() => []);
for (let i = 1; i < input.length; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  adj[u].push(v);
  adj[v].push(u);
}
for (let i = 1; i <= n; i++) {
  adj[i].sort((a, b) => b - a);
}
// console.log(adj);
const ans = Array(n + 1).fill(0);
let cnt = 1;

const dfs = r => {
  ans[r] = cnt++;
  for (const x of adj[r]) {
    if (ans[x] === 0) {
      dfs(x);
    }
  }
};

dfs(r);

console.log(ans.slice(1).join('\n'));
