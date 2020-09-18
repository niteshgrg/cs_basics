/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minNumber = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    minNumber = Math.min(minNumber, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minNumber);
  }

  return maxProfit;
};
