/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const n = height.length;
  let maxVal = 0;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    if (area > maxVal) {
      maxVal = area;
    }
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxVal;
};
