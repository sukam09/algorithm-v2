/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;
  const dp = [...Array(n)].map(() => Array(n).fill(0));

  for (let k = 1; k <= n; k++) {
    for (let i = 0; i <= n - k; i++) {
      if (k === 1) {
        dp[i][i] = 1;
      } else if (k === 2) {
        dp[i][i + 1] = s[i] === s[i + 1] ? 1 : 0;
      } else {
        dp[i][i + k - 1] =
          dp[i + 1][i + k - 2] === 1 && s[i] === s[i + k - 1] ? 1 : 0;
      }
    }
  }

  for (let k = n; k >= 1; k--) {
    for (let i = 0; i < n; i++) {
      if (dp[i][i + k - 1] === 1) {
        return s.slice(i, i + k);
      }
    }
  }
};
