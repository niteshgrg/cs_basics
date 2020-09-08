/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let hashMap = {};
  let pattenArray = [];
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] in hashMap) {
      pattenArray.push(hashMap[pattern[i]]);
    } else {
      hashMap[pattern[i]] = i;
      pattenArray.push(i);
    }
  }

  hashMap = {};
  let strArr = str.split(" ");

  if (strArr.length !== pattenArray.length) {
    return false;
  }

  for (let i = 0; i < strArr.length; i++) {
    console.log(hashMap);
    if (strArr[i] in hashMap) {
      if (pattenArray[i] === hashMap[strArr[i]]) {
        continue;
      } else {
        return false;
      }
    } else {
      hashMap[strArr[i]] = i;
      if (pattenArray[i] === i) {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
