var threeSum = function (nums) {
  let triplets = [];

  nums.sort((a, b) => a - b);

  for (let k = 0; k < nums.length; k++) {
    if (nums[k] > 0) {
      break;
    }
    if (k > 0 && nums[k - 1] === nums[k]) {
      continue;
    }
    let start = k + 1;
    let end = nums.length - 1;

    while (start < end) {
      let sum = nums[k] + nums[start] + nums[end];
      if (sum < 0 || (start > k + 1 && nums[start] == nums[start - 1])) {
        start++;
      } else if (
        sum > 0 ||
        (end < nums.length - 1 && nums[end] == nums[end + 1])
      ) {
        end--;
      } else {
        triplets.push([nums[k], nums[start], nums[end]]);
        start++;
        end--;
      }
    }
  }

  return triplets;
};
