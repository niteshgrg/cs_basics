/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let factorialMem = {};

  if (n === 1) {
    return 1;
  }

  function factorial(num) {
    if (num in factorialMem) {
      return factorialMem[num];
    }
    if (num <= 1) {
      return 1;
    }
    let result = num * factorial(num - 1);
    factorialMem[num] = result;
    return result;
  }

  let output = 0;
  let twoCount = 0;
  let positions = n;
  let remainingOnes = n;

  while (remainingOnes > 1) {
    remainingOnes = n - 2 * twoCount;
    output +=
      factorial(positions) /
      (factorial(positions - twoCount) * factorial(twoCount));
    twoCount++;
    positions--;
  }

  return output;
};
