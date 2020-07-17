/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let hashMap = {};
  let array = [];

  nums.forEach((num) => {
    if (num in hashMap) {
      hashMap[num] += 1;
    } else {
      hashMap[num] = 1;
    }
  });

  for (let num in hashMap) {
    array.push([num, hashMap[num]]);
  }

  array.sort((a, b) => b[1] - a[1]);

  return array.slice(0, k).map((arr) => arr[0]);
};
