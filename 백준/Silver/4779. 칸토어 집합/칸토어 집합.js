const input = require('fs').readFileSync(0, 'utf8').trim().split('\n').map(Number);

let ans = '';
let line;

function solve(start, end) {
  let len = end - start;

  if (len === 1) {
    return;
  }

  // const newArr = [];
  // for (let i = 0; i < len; i++) {
  //   if (start <= i && i < end) {
  //     newArr.push(' ');
  //   } else {
  //     newArr.push('-');
  //   }
  // }
  let newStart = start + len / 3;
  let newEnd = end - len / 3;
  for (let i = newStart; i < newEnd; i++) {
    line[i] = ' ';
  }
  solve(start, newStart);
  solve(newEnd, end);

  // return [...solve(newArr.slice(0, start)), ...newArr.slice(start, end), ...solve(newArr.slice(end, len))];
}

for (const n of input) {
  line = '-'.repeat(3 ** n).split('');
  solve(0, 3 ** n);
  // ans += res.join('') + '\n';
  // console.log(line);
  ans += line.join('') + '\n';
}

console.log(ans);
