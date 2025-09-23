/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const combinations = new Set();

  const backtrack = (sum, combination) => {
    if (sum === target) {
      const key = combination.sort((a, b) => a - b).join(',');
      if (!combinations.has(key)) {
        combinations.add(key);
      }
      return;
    }

    for (const candidate of candidates) {
      if (sum + candidate <= target) {
        backtrack(sum + candidate, [...combination, candidate]);
      }
    }
  };

  backtrack(0, []);

  return [...combinations].map(combination =>
    combination.split(',').map(num => Number(num))
  );
};
