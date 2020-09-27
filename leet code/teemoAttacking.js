/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 0) {
    return 0;
  }
  let output = 0;
  for (let i = 1; i < timeSeries.length; i++) {
    if (timeSeries[i] - timeSeries[i - 1] > duration) {
      output += duration;
    } else {
      output += timeSeries[i] - timeSeries[i - 1];
    }
  }

  return output + duration;
};
