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

// BOJ 10845번. 큐
const solve = cmd => {
  const x = cmd.split(' ');
  if (x.length === 2) {
    const y = x[1];
    q.push(y);
  } else if (x[0] === 'pop') {
    if (q.empty()) ans += '-1';
    else {
      ans += q.front();
      q.pop();
    }
  } else if (x[0] === 'size') {
    ans += q.size();
  } else if (x[0] === 'empty') {
    ans += q.empty() ? '1' : '0';
  } else if (x[0] === 'front') {
    if (q.empty()) ans += '-1';
    else ans += q.front();
  } else {
    if (q.empty()) ans += '-1';
    else ans += q.back();
  }
  if (x.length === 1) ans += '\n';
};

const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const q = new Queue();
let ans = '';
for (let i = 1; i < input.length; i++) {
  const cmd = input[i];
  solve(cmd);
}
console.log(ans);