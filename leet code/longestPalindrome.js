/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let hashMap = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in hashMap) {
      hashMap[s[i]] += 1;
    } else {
      hashMap[s[i]] = 1;
    }
  }

  let values = Object.values(hashMap);
  let oddRemaining = 0;
  let output = 0;

  for (let value of values) {
    if (value % 2 === 0) {
      output += value;
    } else {
      output += value - 1;
      oddRemaining++;
    }
  }

  if (oddRemaining > 0) {
    output++;
  }

  return output;
};
