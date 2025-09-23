/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramMap = new Map();

  const strSort = s => {
    return [...s].sort().join('');
  };

  for (const str of strs) {
    const key = strSort(str);
    if (anagramMap.has(key)) {
      anagramMap.get(key).push(str);
    } else {
      anagramMap.set(key, [str]);
    }
  }

  const anagramKeys = anagramMap.keys();
  const anagramGroups = [];
  for (const anagramKey of anagramKeys) {
    anagramGroups.push(anagramMap.get(anagramKey));
  }
  return anagramGroups;
};
