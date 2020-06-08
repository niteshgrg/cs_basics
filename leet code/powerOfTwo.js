/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  }
  while (n % 2 !== 1) {
    n = n >>> 1;
  }
  if (n == 1) {
    return true;
  }
  return false;
};
