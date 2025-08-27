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

const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const board = [];
for (let i = 1; i < input.length; i++) {
  board.push(input[i]);
}
let x, y;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 'I') {
      [x, y] = [i, j];
      break;
    }
  }
}
const q = new Queue();
const vis = [...Array(n)].map(() => Array(m).fill(0));
q.push([x, y]);
vis[x][y] = 1;
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const OOB = (x, y) => x < 0 || x >= n || y < 0 || y >= m;
let ans = 0;
while (!q.empty()) {
  const [xx, yy] = q.front();
  q.pop();
  if (board[xx][yy] === 'P') ans++;
  for (let i = 0; i < 4; i++) {
    const nx = xx + dx[i];
    const ny = yy + dy[i];
    if (OOB(nx, ny) || vis[nx][ny] || board[nx][ny] === 'X') continue;
    vis[nx][ny] = 1;
    q.push([nx, ny]);
  }
}
console.log(ans > 0 ? ans : 'TT');
