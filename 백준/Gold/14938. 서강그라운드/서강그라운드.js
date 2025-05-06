class PriorityQueue {
  constructor() {
    this.pq = [];
    this.sz = 0;
  }

  push(x) {
    this.pq[++this.sz] = x;
    let cur = this.sz;
    while (cur > 1) {
      let p = Math.floor(cur / 2);
      if (this.pq[p][0] <= this.pq[cur][0]) break;
      this.swap(p, cur);
      cur = p;
    }
  }

  top() {
    return this.pq[1];
  }

  pop() {
    this.pq[1] = this.pq[this.sz--];
    let cur = 1;
    while (cur * 2 <= this.sz) {
      const lc = cur * 2;
      const rc = cur * 2 + 1;
      let mc = lc;
      if (rc <= this.sz && this.pq[rc][0] < this.pq[lc][0]) mc = rc;
      if (this.pq[cur][0] <= this.pq[mc][0]) break;
      this.swap(cur, mc);
      cur = mc;
    }
  }

  swap(a, b) {
    [this.pq[a], this.pq[b]] = [this.pq[b], this.pq[a]];
  }

  empty() {
    return this.sz === 0;
  }
}

const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));
const [n, m, r] = input[0];
const items = [0, ...input[1]]; // 1-index
const adj = [...Array(n + 1)].map(() => []);
for (let i = 2; i < input.length; i++) {
  const [a, b, l] = input[i];
  adj[a].push([l, b]);
  adj[b].push([l, a]);
}
let ans = 0;
let pq, dist;

const dijkstra = st => {
  dist[st] = 0;
  pq = new PriorityQueue();
  pq.push([0, st]);
  while (!pq.empty()) {
    const [d, v] = pq.top();
    pq.pop();
    if (dist[v] !== d) continue;
    for (const [nd, nv] of adj[v]) {
      if (dist[v] + nd < dist[nv]) {
        dist[nv] = dist[v] + nd;
        pq.push([dist[nv], nv]);
      }
    }
  }
};

for (let i = 1; i <= n; i++) {
  dist = Array(n + 1).fill(Infinity);
  tot = 0;
  dijkstra(i);
  for (let i = 1; i <= n; i++) {
    if (dist[i] <= m) {
      tot += items[i];
    }
  }
  ans = Math.max(ans, tot);
  // console.log(i, dist, tot);
}

console.log(ans);