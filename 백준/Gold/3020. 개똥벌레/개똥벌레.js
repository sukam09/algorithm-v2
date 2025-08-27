const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, h] = input[0].split(' ').map(Number);
const ss = [];
const jys = [];
for (let i = 1; i < input.length; i++) {
  if (i % 2 === 1) {
    ss.push(+input[i]);
  } else {
    jys.push(+input[i]);
  }
}
ss.sort((a, b) => a - b);
jys.sort((a, b) => a - b);

const lb = (arr, target) => {
  let st = 0;
  let en = arr.length;
  while (st < en) {
    const mid = Math.floor((st + en) / 2);
    if (arr[mid] >= target) {
      en = mid;
    } else {
      st = mid + 1;
    }
  }
  return en;
};

const ret = [];

for (let i = 1; i <= h; i++) {
  const sscnt = ss.length - lb(ss, i);
  const jyscnt = jys.length - lb(jys, h - i + 1);
  ret.push(sscnt + jyscnt);
}

const mn = Math.min(...ret);
let cnt = 0;
for (let i = 0; i < ret.length; i++) {
  if (ret[i] === mn) cnt++;
}
console.log(mn, cnt);
