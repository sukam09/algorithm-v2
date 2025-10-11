/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const n = nums.length;
  let first = -1;
  let last = -1;
  let start = 0;
  let end = n - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] >= target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  if (nums[start] === target) {
    first = start;
  }
  start = 0;
  end = n - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  if (nums[end] === target) {
    last = end;
  }
  return [first, last];
};
