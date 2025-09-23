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

  let target1 = -1;
  for (let i = nums.length - 1; i >= 1; i--) {
    if (nums[i] > nums[i - 1]) {
      target1 = i - 1;
      break;
    }
  }

  // last permutation
  if (target1 === -1) {
    nums.sort((a, b) => a - b);
    return nums;
  }

  let target2 = -1;
  let target2Val = 101;
  for (let i = target1 + 1; i < nums.length; i++) {
    if (nums[i] > nums[target1] && nums[i] < target2Val) {
      target2 = i;
      target2Val = nums[i];
    }
  }

  [nums[target1], nums[target2]] = [nums[target2], nums[target1]];
  const result = [
    ...nums.slice(0, target1 + 1),
    ...nums.slice(target1 + 1).sort((a, b) => a - b),
  ];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[i];
  }
};
