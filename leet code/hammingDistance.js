/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let orNumber = x ^ y;
  let numOnes = 0;

  while (orNumber > 0) {
    if (orNumber % 2 === 1) {
      numOnes++;
    }
    orNumber = orNumber >> 1;
  }

  return numOnes;
};
