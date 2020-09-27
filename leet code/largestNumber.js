/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => parseInt(("" + b)[0]) - parseInt(("" + a)[0]));
  console.log(nums);
  return nums.map((num) => num.toString()).join("");
};

console.log(largestNumber([10, 2]));
