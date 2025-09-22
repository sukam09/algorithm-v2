/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const parentheses = [];

  const backtrack = (index, current, stack) => {
    if (index === n * 2) {
      if (stack.length === 0) {
        parentheses.push(current);
      }
      return;
    }
    if (stack.length < n) {
      backtrack(index + 1, current + '(', [...stack, '(']);
    }
    if (stack.length > 0) {
      stack.pop();
      backtrack(index + 1, current + ')', stack);
    }
  };

  backtrack(0, '', []);

  return parentheses;
};
