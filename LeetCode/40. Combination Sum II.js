/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const n = candidates.length;
  const combinations = [];
  candidates.sort((a, b) => a - b);

  const backtrack = (sum, path, startIndex) => {
    if (sum === target) {
      combinations.push([...path]);
      return;
    }
    for (let i = startIndex; i < n; i++) {
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }
      if (sum + candidates[i] > target) {
        continue;
      }
      path.push(candidates[i]);
      backtrack(sum + candidates[i], path, i + 1);
      path.pop();
    }
  };

  backtrack(0, [], 0);

  return combinations;
};
