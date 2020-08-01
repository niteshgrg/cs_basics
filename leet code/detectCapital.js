/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.length === 1) {
    return true;
  }

  let lowerRange, upperRange;
  if (word[0] < "a") {
    if (word[1] < "a") {
      lowerRange = "A";
      upperRange = "Z";
    } else {
      lowerRange = "a";
      upperRange = "z";
    }
  } else {
    lowerRange = "a";
    upperRange = "z";
  }

  for (let i = 1; i < word.length; i++) {
    if (word[i] > upperRange || word[i] < lowerRange) {
      return false;
    }
  }

  return true;
};

console.log(detectCapitalUse("ggg"));
