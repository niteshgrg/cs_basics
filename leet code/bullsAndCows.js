/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let hashMap = {};
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] in hashMap) {
      hashMap[secret[i]]++;
    } else {
      hashMap[secret[i]] = 1;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      hashMap[guess[i]]--;
      bulls++;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (
      guess[i] !== secret[i] &&
      guess[i] in hashMap &&
      hashMap[guess[i]] > 0
    ) {
      hashMap[guess[i]]--;
      cows++;
    }
  }

  return `${bulls}A${cows}B`;
};
