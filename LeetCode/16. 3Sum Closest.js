/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let minDist = 99999;
  let closestSum = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        const dist = Math.abs(sum - target);
        if (dist < minDist) {
          minDist = dist;
          closestSum = sum;
        }
      }
    }
  }
  return closestSum;
};
