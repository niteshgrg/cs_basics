/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let string = s[0];
  let index = 0;

  let middle = Math.ceil(s.length / 2);

  if (s.length === 1) {
    return false;
  }

  while (index < middle) {
    if (s.length % (index + 1) === 0) {
      if (s === string.repeat(s.length / (index + 1))) {
        return true;
      }
    }
    index++;
    string = string + s[index];
  }
  return false;
};

console.log(repeatedSubstringPattern("abacababaca"));
console.log(repeatedSubstringPattern("a"));
