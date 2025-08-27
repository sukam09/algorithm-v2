const MX = 10000;

class Deque {
  constructor() {
    this.dat = [];
    this.head = MX;
    this.tail = MX;
  }

  pushFront(x) {
    this.dat[--this.head] = x;
  }

  pushBack(x) {
    this.dat[this.tail++] = x;
  }

  popFront() {
    this.head++;
  }

  popBack() {
    this.tail--;
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

// BOJ 10866번. 덱
const solve = cmd => {
  const x = cmd.split(' ');
  if (x.length === 2) {
    if (x[0] === 'push_front') {
      d.pushFront(x[1]);
    } else {
      d.pushBack(x[1]);
    }
  } else {
    if (x[0] === 'pop_front') {
      if (d.empty()) ans += '-1';
      else {
        ans += d.front();
        d.popFront();
      }
    } else if (x[0] === 'pop_back') {
      if (d.empty()) ans += '-1';
      else {
        ans += d.back();
        d.popBack();
      }
    } else if (x[0] === 'size') {
      ans += d.size();
    } else if (x[0] === 'empty') {
      ans += d.empty() ? '1' : '0';
    } else if (x[0] === 'front') {
      if (d.empty()) ans += '-1';
      else ans += d.front();
    } else {
      if (d.empty()) ans += '-1';
      else ans += d.back();
    }
  }

  if (x.length === 1) ans += '\n';
};

const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const d = new Deque();
let ans = '';
for (let i = 1; i < input.length; i++) {
  solve(input[i]);
}
console.log(ans);
