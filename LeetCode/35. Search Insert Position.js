/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // lower bound
  let left = 0;
  let right = nums.length;
  let targetIndex = -1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    const num = nums[mid];
    if (num === target) {
      return mid;
    } else if (num < target) {
      targetIndex = mid + 1;
      left = mid + 1;
    } else {
      targetIndex = mid;
      right = mid - 1;
    }
  }
  return targetIndex;
};
