/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let total = 0;
  let largestSum = nums[0];

  for (const num of nums) {
    if (total < 0) {
      total = 0;
    }
    total += num;
    largestSum = Math.max(largestSum, total);
  }

  return largestSum;
};
