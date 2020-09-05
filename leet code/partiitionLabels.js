/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  let hashMap = {};
  let output = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] in hashMap) {
      hashMap[S[i]][1] = i;
    } else {
      hashMap[S[i]] = [i];
    }
  }

  // console.log(hashMap);

  let current = 0;

  while (Object.keys(hashMap).length > 0) {
    let currentChar = S[current];
    console.log(currentChar);
    let entry = hashMap[currentChar][0];
    let exit =
      hashMap[currentChar].length > 1 ? hashMap[currentChar][1] : entry;

    delete hashMap[currentChar];

    let newExit = newEntryExit(hashMap, entry, exit);

    while (newExit !== exit) {
      exit = newExit;
      newExit = newEntryExit(hashMap, entry, exit);
    }
    // console.log(exit);

    current = exit + 1;
    output.push(exit - entry + 1);
  }

  function newEntryExit(obj, ent, ext) {
    for (let i in obj) {
      if (obj[i][obj[i].length - 1] < ext) {
        delete obj[i];
        continue;
      }
      if (obj[i].length > 1 && obj[i][0] < ext) {
        if (obj[i][1] > ext) {
          ext = obj[i][1];
        }
        delete obj[i];
        return ext;
      }
    }
    return ext;
  }

  return output;
};
