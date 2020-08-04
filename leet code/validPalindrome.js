/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0,
    j = s.length - 1;

  while (j > i) {
    let code1 = s.charCodeAt(i);
    let code2 = s.charCodeAt(j);

    if (
      !(code1 > 47 && code1 < 58) && // numeric (0-9)
      !(code1 > 64 && code1 < 91) && // upper alpha (A-Z)
      !(code1 > 96 && code1 < 123)
    ) {
      // lower alpha (a-z)
      i++;
      continue;
    }

    if (
      !(code2 > 47 && code2 < 58) && // numeric (0-9)
      !(code2 > 64 && code2 < 91) && // upper alpha (A-Z)
      !(code2 > 96 && code2 < 123)
    ) {
      // lower alpha (a-z)
      j--;
      continue;
    }

    if (code1 > 64 && code1 < 91) {
      code1 += 32;
    }

    if (code2 > 64 && code2 < 91) {
      code2 += 32;
    }

    if (code1 === code2) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
};
