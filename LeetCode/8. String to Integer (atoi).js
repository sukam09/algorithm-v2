/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  let index = 0;
  let sign = 1;
  let result = 0;

  while (index < s.length && s[index] === ' ') {
    index++;
  }

  if (index < s.length && (s[index] === '+' || s[index] === '-')) {
    sign = s[index] === '-' ? -1 : 1;
    index++;
  }

  while (index < s.length && s[index] >= '0' && s[index] <= '9') {
    const digit = s[index] - '0';

    if (
      result > Math.trunc(INT_MAX / 10) ||
      (result === Math.trunc(INT_MAX / 10) && digit > 7)
    ) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    result = result * 10 + digit;
    index++;
  }

  return result * sign;
};
