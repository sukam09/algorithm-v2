/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const permutations = [];
  const n = nums.length;
  const used = Array(n).fill(false);

  const backtrack = (count, permutation) => {
    if (count === n) {
      permutations.push(permutation);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) {
        continue;
      }
      used[i] = true;
      backtrack(count + 1, [...permutation, nums[i]]);
      used[i] = false;
    }
  };

  backtrack(0, []);

  return permutations;
};
