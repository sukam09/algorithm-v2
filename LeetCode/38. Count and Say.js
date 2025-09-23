const RLE = s => {
  let now = '';
  let count = 0;
  let encoding = '';
  for (const char of s) {
    if (char !== now) {
      if (count > 0) {
        encoding += `${count}${now}`;
      }
      count = 1;
      now = char;
    } else {
      count++;
    }
  }
  encoding += `${count}${now}`;
  return encoding;
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) {
    return '1';
  }

  return RLE(countAndSay(n - 1));
};
