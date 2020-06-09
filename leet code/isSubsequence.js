/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let tHashMap = {};
  for (let i = 0; i < t.length; i++) {
    if (t[i] in tHashMap) {
      tHashMap[t[i]].push(i);
    } else {
      tHashMap[t[i]] = [i];
    }
  }

  let indexTillNow = -1;

  for (let i of s) {
    if (i in tHashMap) {
      let index = tHashMap[i].find((x) => x > indexTillNow);
      if (index === undefined) {
        return false;
      }
      indexTillNow = index;
    } else {
      return false;
    }
  }

  return true;
};
