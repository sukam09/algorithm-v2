const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const a = [...Array(n)].map(() => Array(m).fill(0));
const b = [...Array(n)].map(() => Array(m).fill(0));

let nn = n;
let idx = 1;
let i = 0;

while (nn--) {
  for (let j = 0; j < m; j++) {
    a[i][j] = +input[idx][j];
  }
  i++;
  idx++;
}

nn = n;
i = 0;

while (nn--) {
  for (let j = 0; j < m; j++) {
    b[i][j] = +input[idx][j];
  }
  i++;
  idx++;
}

let ans = 0;

const chk = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (a[i][j] !== b[i][j]) {
        return 0;
      }
    }
  }
  return 1;
};

const rev = (x, y) => {
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      a[i][j] = 1 - a[i][j];
    }
  }
};

if ((n < 3 || m < 3) && !chk()) {
  console.log(-1);
  process.exit();
}

for (let i = 0; i <= n - 3; i++) {
  for (let j = 0; j <= m - 3; j++) {
    if (a[i][j] !== b[i][j]) {
      rev(i, j);
      ans++;
    }
  }
}

console.log(chk() ? ans : -1);
