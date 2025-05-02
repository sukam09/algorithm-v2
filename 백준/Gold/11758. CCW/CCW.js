const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));
const [x1, y1] = input[0];
const [x2, y2] = input[1];
const [x3, y3] = input[2];
const ccw = x1 * y2 + x2 * y3 + x3 * y1 - (y1 * x2 + y2 * x3 + y3 * x1);
if (ccw > 0) console.log(1);
else if (ccw === 0) console.log(0);
else console.log(-1);
