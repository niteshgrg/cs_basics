var wordBreak = function (s, wordDict) {
  let output = [];
  let hashMap = {};
  let wordDictCharMap = {};

  wordDict.forEach((word) => {
    hashMap[word] = true;

    let wordChars = word.split("");
    wordChars.forEach((char) => {
      wordDictCharMap[char] = true;
    });
  });

  let sArr = s.split("");

  for (let i = 0; i < sArr.length; i++) {
    if (!(sArr[i] in wordDictCharMap)) {
      return [];
    }
  }

  function formStrings(arr, index) {
    console.log(arr);
    if (arr.length === 0) {
      return;
    }

    if (arr[1] === "") {
      output.push(arr[0]);
    }

    if (arr[arr.length - 1].length <= index) {
      return;
    }

    let str = arr[arr.length - 1].substring(0, index + 1);

    formStrings(arr, index + 1);
    if (str in hashMap) {
      if (arr.length === 1) {
        formStrings([str, arr[0].substring(index + 1)], 0);
      } else {
        formStrings([arr[0] + " " + str, arr[1].substring(index + 1)], 0);
      }
    }
  }

  formStrings([s], 0);

  return output;
};

console.log(
  wordBreak(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    [
      "a",
      "aa",
      "aaa",
      "aaaa",
      "aaaaa",
      "aaaaaa",
      "aaaaaaa",
      "aaaaaaaa",
      "aaaaaaaaa",
      "aaaaaaaaaa",
    ]
  )
);
