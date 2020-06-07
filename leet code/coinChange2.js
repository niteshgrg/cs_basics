/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let grid = new Array(coins.length + 1)
    .fill(0)
    .map(() => new Array(amount + 1).fill(0));

  for (let i = 0; i <= coins.length; i++) {
    for (let j = 0; j <= amount; j++) {
      if (j === 0) {
        grid[i][j] = 1;
      } else if (i === 0) {
        continue;
      } else {
        let coinNotUsed = grid[i - 1][j];
        let coinUsed = j - coins[i - 1] >= 0 ? grid[i][j - coins[i - 1]] : 0;
        grid[i][j] = coinNotUsed + coinUsed;
      }
    }
  }

  return grid[coins.length][amount];
};
