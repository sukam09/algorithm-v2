/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const n = nums.length;
  const dp = Array(n).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 1; j <= nums[i]; j++) {
      if (i + j >= n) {
        continue;
      }
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
    }
  }
  return dp[n - 1];
};
