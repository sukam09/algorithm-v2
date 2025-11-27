class PriorityQueue {
  constructor() {
    this.heap = [];
    this.sz = 0;
  }

  push(x) {
    this.heap[++this.sz] = x;
    let cur = this.sz;
    while (cur > 1) {
      const p = Math.floor(cur / 2);
      if (this.heap[p][0] <= this.heap[cur][0]) break;
      this.swap(p, cur);
      cur = p;
    }
  }

  top() {
    return this.heap[1];
  }

  pop() {
    this.heap[1] = this.heap[this.sz--];
    let cur = 1;
    while (cur * 2 <= this.sz) {
      const lc = cur * 2;
      const rc = cur * 2 + 1;
      let mc = lc;
      if (rc <= this.sz && this.heap[rc][0] < this.heap[mc][0]) {
        mc = rc;
      }
      if (this.heap[cur][0] <= this.heap[mc][0]) break;
      this.swap(cur, mc);
      cur = mc;
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  empty() {
    return this.sz === 0;
  }

  size() {
    return this.sz;
  }
}

const input = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));
const [n, d] = input[0];
const adj = [...Array(d + 1)].map(() => []);
for (let i = 1; i < input.length; i++) {
  const [s, e, w] = input[i];
  if (s > d || e > d) {
    continue;
  }
  adj[s].push([w, e]);
}
for (let i = 0; i < d; i++) {
  adj[i].push([1, i + 1]);
}

const dist = Array(d + 1).fill(Infinity);
dist[0] = 0;

const dijkstra = () => {
  while (!pq.empty()) {
    const [dd, cur] = pq.top();
    pq.pop();
    if (dist[cur] !== dd) {
      continue;
    }
    for (const [ndd, nc] of adj[cur]) {
      if (dist[cur] + ndd < dist[nc]) {
        dist[nc] = dist[cur] + ndd;
        pq.push([dist[nc], nc]);
      }
    }
  }
};

const pq = new PriorityQueue();
pq.push([0, 0]);
dijkstra();

console.log(dist[d]);
