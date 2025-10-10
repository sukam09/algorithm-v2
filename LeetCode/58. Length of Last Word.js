/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const splitted = s.split(' ');
  const filtered = splitted.filter(s => s.length > 0);
  return filtered[filtered.length - 1].length;
};
