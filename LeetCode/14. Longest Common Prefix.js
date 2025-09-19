/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const firstStr = strs[0];
  for (let charIndex = 0; charIndex < firstStr.length; charIndex++) {
    const charToCompare = firstStr[charIndex];
    for (let strIndex = 1; strIndex < strs.length; strIndex++) {
      const currentStr = strs[strIndex];
      if (
        charIndex >= currentStr.length ||
        currentStr[charIndex] !== charToCompare
      ) {
        return firstStr.slice(0, charIndex);
      }
    }
  }
  return firstStr;
};
