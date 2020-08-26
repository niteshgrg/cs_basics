/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  let dp = new Array(400).fill(0);

  for (let j = 364; j >= 0; j--) {
    if (days.includes(j + 1)) {
      dp[j] = Math.min(
        costs[0] + dp[j + 1],
        costs[1] + dp[j + 7],
        costs[2] + dp[j + 30]
      );
    } else {
      dp[j] = dp[j + 1];
    }
  }

  return dp[0];
};
