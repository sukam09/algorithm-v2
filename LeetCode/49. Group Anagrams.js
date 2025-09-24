/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramGroups = {};

  const strSort = str => {
    return [...str].sort().join('');
  };

  for (const str of strs) {
    const key = strSort(str);
    if (key in anagramGroups) {
      anagramGroups[key].push(str);
    } else {
      anagramGroups[key] = [str];
    }
  }

  return Object.values(anagramGroups);
};
