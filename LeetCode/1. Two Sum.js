/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numLength = nums.length;
  for (let i = 0; i < numLength; i++) {
    for (let j = i + 1; j < numLength; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
};
