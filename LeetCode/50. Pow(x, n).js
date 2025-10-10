/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 0 || x === 1) {
    return x;
  }

  if (n === 0) {
    return 1;
  }

  let val = 1;
  const k = n > 0 ? n : -n;

  const pow = (x, k) => {
    if (k === 1) {
      return x;
    }
    const half = pow(x, Math.floor(k / 2));
    let result = half * half;
    if (k % 2 === 1) {
      result *= x;
    }
    return result;
  };

  val = pow(x, k);

  return n > 0 ? val : 1 / val;
};
