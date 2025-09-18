/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const arr = [...Array(numRows)].map(() => []);
  let rowIndex = 0;
  let down = true;

  if (numRows === 1) {
    return s;
  }

  for (const char of s) {
    arr[rowIndex].push(char);
    if (!down && rowIndex === 0) {
      down = true;
    } else if (down && rowIndex === numRows - 1) {
      down = false;
    }
    if (down) {
      rowIndex++;
    } else {
      rowIndex--;
    }
  }

  let convertedString = '';
  for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    convertedString += arr[rowIndex].join('');
  }
  return convertedString;
};
