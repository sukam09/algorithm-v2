/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const combinations = [];

  const backtrack = (startIndex, currentSum, combination) => {
    if (currentSum === target) {
      combinations.push([...combination]);
      return;
    }

    if (currentSum > target) {
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      combination.push(candidates[i]);
      backtrack(i, currentSum + candidates[i], combination);
      combination.pop();
    }
  };

  backtrack(0, 0, []);
  return combinations;
};
