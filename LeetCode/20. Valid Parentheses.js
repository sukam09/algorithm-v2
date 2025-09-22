/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const bracketMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (const char of s) {
    if (Object.keys(bracketMap).includes(char)) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const top = stack[stack.length - 1];
      const pair = bracketMap[top];
      if (char !== pair) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};
