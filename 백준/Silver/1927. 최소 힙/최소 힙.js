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
      if (this.heap[p] <= this.heap[cur]) break;
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
      if (rc <= this.sz && this.heap[rc] < this.heap[mc]) {
        mc = rc;
      }
      if (this.heap[cur] <= this.heap[mc]) break;
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

const solve = x => {
  if (x > 0) {
    pq.push(x);
  } else {
    if (pq.empty()) ans += '0\n';
    else {
      ans += pq.top() + '\n';
      pq.pop();
    }
  }
};

const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let ans = '';
const pq = new PriorityQueue();
for (let i = 1; i < input.length; i++) {
  const x = +input[i];
  solve(x);
}
console.log(ans);