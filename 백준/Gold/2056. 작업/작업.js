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

const n = input[0][0];
const adj = [...Array(n + 1)].map(() => []);
const t = Array(n + 1).fill(0);
const deg = Array(n + 1).fill(0);
const d = Array(n + 1).fill(0);
for (let i = 1; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (j === 0) t[i] = input[i][j];
    else if (j === 1) deg[i] = input[i][j];
    else {
      adj[input[i][j]].push(i);
    }
  }
}
const q = new Queue();
for (let i = 1; i < deg.length; i++) {
  if (deg[i] === 0) q.push(i);
}
while (!q.empty()) {
  const cur = q.front();
  q.pop();
  d[cur] += t[cur];
  for (const nxt of adj[cur]) {
    deg[nxt]--;
    d[nxt] = Math.max(d[nxt], d[cur]);
    if (deg[nxt] === 0) {
      q.push(nxt);
    }
  }
}
console.log(Math.max(...d));
