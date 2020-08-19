/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  let sArr = S.split(" ");

  return sArr
    .map((word, index) => {
      if (
        ["a", "e", "i", "o", "u", "E", "A", "I", "O", "U"].includes(word[0])
      ) {
        return word + "ma" + "a".repeat(index + 1);
      } else {
        return word.substring(1) + word[0] + "ma" + "a".repeat(index + 1);
      }
    })
    .join(" ");
};
