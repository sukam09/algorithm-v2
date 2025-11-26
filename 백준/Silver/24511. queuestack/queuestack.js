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
const m = input[3][0];
const a = input[1];
const b = input[2];
const c = input[4];

const q = new Queue();
for (let i = n - 1; i >= 0; i--) {
  if (a[i] === 0) {
    q.push(b[i]);
  }
}

const ans = [];

for (let i = 0; i < m; i++) {
  q.push(c[i]);
  ans.push(q.front());
  q.pop();
}

console.log(ans.join(' '));
