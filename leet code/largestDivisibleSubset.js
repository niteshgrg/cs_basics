/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => a - b);
  let count = [];
  let indexArr = [];
  let max_index = 0;

  if (nums.length === 0) {
    return [];
  }

  nums.forEach(() => {
    count.push(1);
  });

  nums.forEach((num, index) => {
    indexArr.push(index);
  });

  nums.forEach(function (num, index) {
    for (let i = 0; i < index; i++) {
      if (num % nums[i] === 0 && count[index] <= count[i] + 1) {
        count[index] = count[i] + 1;
        indexArr[index] = i;

        if (count[max_index] <= count[index]) {
          max_index = index;
        }
      }
    }
  });

  let arr = [];

  while (indexArr[max_index] !== max_index) {
    arr.unshift(nums[max_index]);
    max_index = indexArr[max_index];
  }
  arr.unshift(nums[max_index]);

  return arr;
};

console.log(largestDivisibleSubset([1, 2, 4, 8, 16]));
