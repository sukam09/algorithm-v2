/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const MAX = 2 ** 31 - 1;
  const MIN = -(2 ** 31);

  if (dividend === MIN && divisor === -1) {
    return MAX;
  }
  if (dividend === MIN && divisor === 1) {
    return MIN;
  }

  const sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;

  let bit = 31;
  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);
  let quotient = 0;

  while (absDividend >= absDivisor) {
    if (bit < 0) {
      break;
    }
    if (absDividend >>> bit >= absDivisor) {
      quotient += 1 << bit;
      absDividend -= absDivisor << bit;
    }
    bit--;
  }

  return sign * quotient;
};
