/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const n = nums.length;
  const dp = Array(n).fill(false);
  dp[0] = true;
  for (let i = 0; i < n; i++) {
    if (i > 0 && !dp[i]) {
      return false;
    }
    for (let j = 1; j <= nums[i]; j++) {
      if (i + j >= n) {
        continue;
      }
      dp[i + j] = true;
    }
  }
  return dp[n - 1];
};
