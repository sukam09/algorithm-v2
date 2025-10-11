/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  const m = num1.length;
  const n = num2.length;
  const result = Array(m + n).fill(0);
  for (let j = n - 1; j >= 0; j--) {
    for (let i = m - 1; i >= 0; i--) {
      const p1 = i + j;
      const p2 = i + j + 1;
      const mul = Number(num1[i]) * Number(num2[j]);
      const sum = result[p2] + mul;
      result[p1] += Math.floor(sum / 10);
      result[p2] = sum % 10;
    }
  }

  if (result[0] === 0) {
    result.shift();
  }

  return result.join('');
};

/*
123
456
---
  738
 615
492
-----
56088

999
999
---
  8991
 8991
8991
------
998001
*/
