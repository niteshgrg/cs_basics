var sortColors = function (nums) {
  let zeroIndexTillNow = 0;
  let twoIndexTillNow = nums.length - 1;

  while (nums[twoIndexTillNow] === 2) {
    twoIndexTillNow--;
  }

  while (nums[zeroIndexTillNow] === 0) {
    zeroIndexTillNow++;
  }

  let i = zeroIndexTillNow;

  while (i <= twoIndexTillNow) {
    if (nums[i] === 0) {
      let temp = nums[zeroIndexTillNow];
      nums[zeroIndexTillNow] = nums[i];
      nums[i] = temp;
      zeroIndexTillNow++;
      i++;
    } else if (nums[i] === 2) {
      let temp = nums[twoIndexTillNow];
      nums[twoIndexTillNow] = nums[i];
      nums[i] = temp;
      twoIndexTillNow--;
    } else {
      i++;
    }
  }
  return nums;
};

// [0,0,1,1,2,2,2,2]
console.log(sortColors([0, 2, 2, 2, 0, 2, 1, 1]));

// [0,0,1,1,2,2,2,2]
console.log(sortColors([1, 2, 0]));

// [0, 0, 1, 1, 2, 2]
console.log(sortColors([2, 0, 2, 1, 1, 0]));
