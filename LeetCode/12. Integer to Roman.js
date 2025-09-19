/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const numbers = [1, 5, 10, 50, 100, 500, 1000, 4, 9, 40, 90, 400, 900];
  numbers.sort((a, b) => b - a);
  let originalNum = num;
  const romanMap = new Map([
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M'],
    [4, 'IV'],
    [9, 'IX'],
    [40, 'XL'],
    [90, 'XC'],
    [400, 'CD'],
    [900, 'CM'],
  ]);
  let roman = '';
  while (originalNum > 0) {
    for (const number of numbers) {
      if (number <= originalNum) {
        roman += romanMap.get(number);
        originalNum -= number;
        break;
      }
    }
  }
  return roman;
};
