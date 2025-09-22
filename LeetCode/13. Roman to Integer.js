/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const subtractMap = {
    I: 'VX',
    X: 'LC',
    C: 'DM',
  };
  let romanInt = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (
      i < s.length - 1 &&
      'IXC'.includes(char) &&
      subtractMap[char].includes(s[i + 1])
    ) {
      romanInt -= romanMap[char];
    } else {
      romanInt += romanMap[char];
    }
  }
  return romanInt;
};
