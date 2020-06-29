/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = new Array(n).fill(0).map(() => new Array(m).fill(0));

  dp[0][0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      if (i === 0) {
        dp[i][j] = dp[i][j] + dp[i][j - 1];
      } else if (j == 0) {
        dp[i][j] = dp[i][j] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }
  }

  return dp[n - 1][m - 1];
};
