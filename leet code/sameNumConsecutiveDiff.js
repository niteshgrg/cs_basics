/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function (N, K) {
  let output = [];

  if (N === 0) {
    return output;
  }

  if (N === 1) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  function getNumber(N, K, tillNow) {
    if (tillNow.length === N) {
      output.push(parseInt(tillNow));
      return;
    }

    let lastDigit = parseInt(tillNow[tillNow.length - 1]);

    if (lastDigit + K <= 9) {
      getNumber(N, K, tillNow + (lastDigit + K));
    }

    if (lastDigit - K >= 0 && lastDigit - K !== lastDigit + K) {
      getNumber(N, K, tillNow + (lastDigit - K));
    }
  }

  getNumber(N, K, "1");
  getNumber(N, K, "2");
  getNumber(N, K, "3");
  getNumber(N, K, "4");
  getNumber(N, K, "5");
  getNumber(N, K, "6");
  getNumber(N, K, "7");
  getNumber(N, K, "8");
  getNumber(N, K, "9");

  return output;
};
