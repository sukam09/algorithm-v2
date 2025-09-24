/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  /*
    1 2 3
    1 3 2
    2 1 3
    2 3 1
    3 1 2
    3 2 1
    ..
    1 1 5
    1 5 1
    5 1 1

    1 2 3 4
    1 2 4 3
    1 3 2 4
    1 3 4 2
    1 4 2 3
    1 4 3 2
    2 1 3 4
    2 3 1 4
    2 3 4 1
    2 4 1 3
    2 4 3 1
    3 1 2 4
    3 1 4 2
    3 2 1 4
    3 2 4 1
    3 4 1 2
    3 4 2 1
    4 1 2 3
    4 1 3 2
    4 2 1 3
    ...
    4 3 2 1
  */
  const swap = (i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };

  const reverse = (start, end) => {
    while (start < end) {
      swap(start, end);
      start++;
      end--;
    }
  };

  let pivotIndex = -1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      pivotIndex = i;
      break;
    }
  }

  if (pivotIndex === -1) {
    reverse(0, nums.length - 1);
    return;
  }

  for (let i = nums.length - 1; i > pivotIndex; i--) {
    if (nums[i] > nums[pivotIndex]) {
      swap(pivotIndex, i);
      break;
    }
  }

  reverse(pivotIndex + 1, nums.length - 1);
};
