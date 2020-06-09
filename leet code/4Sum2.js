/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  let ABhashmap = {};
  let output = 0;
  for (let i of A) {
    for (let j of B) {
      let sum = i + j;
      if (sum in ABhashmap) {
        ABhashmap[sum] += 1;
      } else {
        ABhashmap[sum] = 1;
      }
    }
  }

  for (let k of C) {
    for (let l of D) {
      let sum = -(k + l);
      if (sum in ABhashmap) {
        output += ABhashmap[sum];
      }
    }
  }

  return output;
};
