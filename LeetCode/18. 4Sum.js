/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const results = [];
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < n - 2; j++) {
      let left = j + 1;
      let right = n - 1;
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          results.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          left++;
        }
      }
    }
  }
  return results;
};
