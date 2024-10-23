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

const input = require('fs').readFileSync(0).toString().trim().split('\n');
let [v, e] = input[0].split(' ').map(v => +v);
let st = +input[1];
let idx = 2;
const adj = [...Array(v + 1)].map(() => []);
const dist = Array(v + 1).fill(Infinity);

while (e--) {
  const [u, v, w] = input[idx++].split(' ').map(v => +v);
  adj[u].push([w, v]);
  // adj[v].push([w, u]);
}

const dijkstra = () => {
  while (!pq.empty()) {
    const [d, v] = pq.top(); pq.pop();
    if (dist[v] !== d) continue;
    for (const [nd, nv] of adj[v]) {
      if (dist[v] + nd >= dist[nv]) continue;
      dist[nv] = dist[v] + nd;
      pq.push([dist[nv], nv]);
    }
  }
};

const pq = new PriorityQueue();
pq.push([0, st]);
dist[st] = 0;
// console.log(adj);
dijkstra();
// console.log(dist);
let ans = '';
for (let i = 1; i <= v; i++) {
  ans += dist[i] === Infinity ? 'INF\n' : dist[i] + '\n';
}
console.log(ans);