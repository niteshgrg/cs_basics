/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  let output = 0;

  function frequncies(startIndex, endIndex) {
    let freqArr = [];
    let noBreakFound = true;
    for (let i = 0; i < 26; i++) {
      freqArr[i] = 0;
    }

    for (let i = startIndex; i < endIndex; i++) {
      freqArr[s[i].charCodeAt() - 97] += 1;
    }

    for (let i = startIndex; i < endIndex; i++) {
      if (freqArr[s[i].charCodeAt() - 97] < k) {
        frequncies(startIndex, i);
        frequncies(i + 1, endIndex);
        noBreakFound = false;
        break;
      }
    }
    if (noBreakFound) {
      output = Math.max(output, endIndex - startIndex);
    }
  }
  frequncies(0, s.length);
  return output;
};
