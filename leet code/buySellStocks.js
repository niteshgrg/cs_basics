/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minNumber = prices[0];
  let maxProfitValue = 0;

  for (let i = 1; i < prices.length; i++) {
    minNumber = Math.min(minNumber, prices[i]);
    maxProfitValue = Math.max(maxProfitValue, prices[i] - minNumber);
  }

  return maxProfitValue;
};
