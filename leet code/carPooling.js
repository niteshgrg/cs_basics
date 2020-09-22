/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  let starts = new Array(1001).fill(0);
  let ends = new Array(1001).fill(0);
  let current = 0;

  for (let i of trips) {
    starts[i[1]] += i[0];
    ends[i[2]] += i[0];
  }

  for (let i = 0; i <= 1000; i++) {
    current += starts[i];
    current -= ends[i];
    if (current > capacity) {
      return false;
    }
  }

  return true;
};
