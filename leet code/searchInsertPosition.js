var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.ceil((low + high) / 2);

    console.log(nums[mid] === target);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return nums[high] > target ? high : high + 1;
};

console.log(searchInsert([1], 1));
