const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
let ans = '';
const stack = [];
for (let i = 1; i < input.length; i++) {
  const item = input[i];
  const command = item.split(' ').map(Number);
  // console.log(command[0], command[1]);
  switch (command[0]) {
    case 1:
      const x = command[1];
      stack.push(x);
      break;
    case 2:
      if (stack.length > 0) {
        const top = stack.pop();
        ans += top + '\n';
      } else {
        ans += -1 + '\n';
      }
      break;
    case 3:
      ans += stack.length + '\n';
      break;
    case 4:
      ans += (stack.length === 0 ? 1 : 0) + '\n';
      break;
    case 5:
      if (stack.length > 0) {
        ans += stack[stack.length - 1] + '\n';
      } else {
        ans += -1 + '\n';
      }
      break;
    default:
      break;
  }
  // ans += '\n';
  // console.log('step:', ans);
}
// console.log(stack);
console.log(ans);
