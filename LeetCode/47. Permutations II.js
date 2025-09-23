/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  const numsLength = nums.length;
  const visited = Array(numsLength).fill(false);

  nums.sort((a, b) => a - b);

  const backtrack = path => {
    if (path.length === numsLength) {
      // push/pop 방식은 원본 path를 공유하므로 결과 배열에는 복사본을 넣어줘야 함
      result.push([...path]);
      return;
    }

    for (let i = 0; i < numsLength; i++) {
      if (visited[i]) {
        continue;
      }
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) {
        continue;
      }

      visited[i] = true;
      path.push(nums[i]);
      backtrack(path);
      path.pop();
      visited[i] = false;
    }
  };

  backtrack([]);
  return result;
};
