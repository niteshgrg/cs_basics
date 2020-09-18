/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let output = [];
  let kArr = [];
  let i = 1;

  while (kArr.length < k - 1) {
    kArr.push(i);
    i++;
    if (i > 9) {
      return [];
    }
  }

  kArr.push(n - (i * (i - 1)) / 2);

  if (kArr[k - 1] > 9) {
    let remaining = kArr[k - 1] - 9;
    kArr[k - 1] = 9;
    let index = k - 2;
    while (remaining > 0 && index >= 0) {
      let temp = kArr[index];
      kArr[index] = Math.min(kArr[index + 1] - 1, kArr[index] + remaining);
      remaining = remaining - kArr[index] + temp;
      index--;
    }

    if (remaining !== 0) {
      return [];
    }
  }

  //   console.log(kArr);

  if (kArr[k - 1] < 0 || kArr[k - 1] < kArr[k - 2]) {
    return output;
  }

  output.push([...kArr]);
  //   console.log(output);

  let currentIndex = k - 1;

  while (currentIndex > 0) {
    i = 1;
    while (true) {
      kArr[currentIndex]--;
      kArr[currentIndex - i]++;
      if (
        kArr[currentIndex - i] >= kArr[currentIndex - i + 1] ||
        kArr[currentIndex] <= kArr[currentIndex - 1]
      ) {
        kArr[currentIndex]++;
        kArr[currentIndex - i]--;
        i++;
        if (currentIndex - i < 0) {
          break;
        } else {
          continue;
        }
      }
      output.push([...kArr]);
      //   console.log(output);
    }
    currentIndex--;
  }

  return output;
};

//[[1,2,6], [1,3,5], [2,3,4]]
console.log(combinationSum3(3, 9));

//[[1,2,4]]
console.log(combinationSum3(3, 7));

//[]
console.log(combinationSum3(2, 18));

//[[1,5,9],[1,6,8],[2,4,9],[2,5,8],[2,6,7],[3,4,8],[3,5,7],[4,5,6]]
console.log(combinationSum3(3, 15));
