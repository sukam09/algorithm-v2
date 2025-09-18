/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  let reversedNumber = 0;
  let originNumber = x;

  while (originNumber !== 0) {
    const lastDigit = originNumber % 10;
    originNumber = Math.trunc(originNumber / 10);

    if (
      reversedNumber > INT_MAX / 10 ||
      (reversedNumber === INT_MAX / 10 && lastDigit > 7)
    ) {
      return 0;
    } else if (
      reversedNumber < INT_MIN / 10 ||
      (reversedNumber === INT_MIN / 10 && lastDigit < -8)
    ) {
      return 0;
    }

    reversedNumber = reversedNumber * 10 + lastDigit;
  }

  return reversedNumber;
};
