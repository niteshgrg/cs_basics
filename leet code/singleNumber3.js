/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let set = new Set();

  nums.forEach((num) => {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  });

  return Array.from(set);
};
