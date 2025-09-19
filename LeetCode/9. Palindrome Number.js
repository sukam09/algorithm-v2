/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let originalNumber = x;
  let reversedNumber = 0;

  while (originalNumber > reversedNumber) {
    reversedNumber = reversedNumber * 10 + (originalNumber % 10);
    originalNumber = Math.trunc(originalNumber / 10);
  }

  return (
    originalNumber === reversedNumber ||
    originalNumber === Math.trunc(reversedNumber / 10)
  );
};
