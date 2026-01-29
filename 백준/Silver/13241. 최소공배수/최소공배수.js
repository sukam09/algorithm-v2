const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
// console.log(input);
// console.log(input, input[0], input[0].split(' '));
const [a, b] = input[0].split(' ').map(Number);
let aa = a;
let bb = b;
// console.log(a, b);
const maxval = a * b;
const chk = new Set();
while (aa <= maxval) {
  chk.add(aa);
  aa += a;
}
// console.log(chk);
while (bb <= maxval) {
  if (chk.has(bb)) {
    console.log(bb);
    process.exit();
  }
  chk.add(bb);
  bb += b;
}
