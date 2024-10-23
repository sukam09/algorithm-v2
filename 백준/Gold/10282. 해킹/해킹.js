class PriorityQueue {
  constructor() {
    this.pq = [];
    this.sz = 0;
  }

  push(x) {
    this.pq[++this.sz] = x;
    let cur = this.sz;
    while (cur > 1) {
      let p = parseInt(cur / 2);
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
      if (this.pq[cur] <= this.pq[mc]) break;
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
let t = +input[0];
let idx = 1;
let ans = '';
let adj;
let n, d, c;
let pq;
let dist;

const dijkstra = () => {
  // console.log(pq);
  while (!pq.empty()) {
    const [d, v] = pq.top(); pq.pop();
    // console.log(d, v);
    if (dist[v] !== d) continue;
    for (const [nd, nv] of adj[v]) {
      if (dist[v] + nd >= dist[nv]) continue;
      dist[nv] = dist[v] + nd;
      pq.push([dist[nv], nv]);
    }
  }
};

while (t--) {
  [n, d, c] = input[idx++].split(' ').map(v => +v);
  adj = [...Array(n + 1)].map(() => []);
  while (d--) {
    const [a, b, s] = input[idx++].split(' ').map(v => +v);
    adj[b].push([s, a]);
  }
  dist = [...Array(n + 1)].fill(Infinity);
  dist[c] = 0;
  pq = new PriorityQueue();
  pq.push([0, c]);
  dijkstra();
  // console.log(dist);
  let mx = -1;
  for (let i = 1; i <= n; i++) {
    if (dist[i] !== Infinity && dist[i] > mx) {
      mx = dist[i];
    }
  }
  const cnt = dist.filter(v => v !== Infinity).length;
  ans += cnt + ' ' + mx + '\n';
}
console.log(ans);