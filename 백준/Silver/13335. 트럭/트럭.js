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
    this.dat[this.head] = null;
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

const [n, w, l] = input[0];
const a = input[1];

let ans = 1;
let cnt = 0;
let tot = a.length;
let cw = 0;

const q = new Queue();
// q -> [무게, 들어온 시간]
const wq = new Queue();
for (const x of a) {
  wq.push(x);
}
// wq -> q에 들어가기 전 대기하는 큐로서 무게만 가짐
// w가 길이, l이 무게!
while (1) {
  if (!q.empty()) {
    const top = q.front();
    if (ans - top[1] === w) {
      q.pop();
      cnt++;
      if (cnt === tot) {
        console.log(ans);
        break;
      }
      cw -= top[0];
    }
  }
  // 한번의 단위 시간에 하나의 트럭만 올릴 수 있음(if 자리가 있고 무게제한을 넘지 않았다면)
  if (!wq.empty()) {
    const x = wq.front();
    if (cw + x <= l && q.size() + 1 <= w) {
      wq.pop();
      q.push([x, ans]);
      cw += x;
    }
  }
  ans++;
}
