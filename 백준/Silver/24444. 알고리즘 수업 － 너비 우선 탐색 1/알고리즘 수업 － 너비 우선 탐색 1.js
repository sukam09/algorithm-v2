class Queue {
  constructor() {
    this.dat = [];
    this.head = 0;
    this.tail = 0;
  }

  push(x) {
    this.dat[this.tail++] = x;
  }

  pop() {
    this.head++;
  }

  front() {
    return this.dat[this.head];
  }

  back() {
    return this.dat[this.tail - 1];
  }

  empty() {
    return this.head === this.tail;
  }

  size() {
    return this.tail - this.head;
  }
}

const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));

const [n, m, r] = input[0];
const adj = [...Array(n + 1)].map(() => []);
for (let i = 1; i < input.length; i++) {
  const [u, v] = input[i];
  adj[u].push(v);
  adj[v].push(u);
}
for (let i = 1; i <= n; i++) {
  adj[i].sort((a, b) => a - b);
}

const vis = Array(n + 1).fill(0);
vis[r] = 1;
const q = new Queue();
q.push(r);
let cur = 2;

while (!q.empty()) {
  const v = q.front();
  q.pop();
  for (const nv of adj[v]) {
    if (vis[nv] !== 0) {
      continue;
    }
    vis[nv] = cur++;
    q.push(nv);
  }
}

let ans = '';
for (let i = 1; i <= n; i++) {
  ans += vis[i] + '\n';
}
console.log(ans);
