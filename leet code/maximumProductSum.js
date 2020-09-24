/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let lastProduct = Number.MIN_SAFE_INTEGER;
  let lastNegativeNumber = Number.MIN_SAFE_INTEGER;
  let rollingProduct = 0;
  let largestProduct = Number.MIN_SAFE_INTEGER;

  if (nums.length === 1) {
    return nums[0];
  }

  for (let j = 0; j < nums.length; j++) {
    // console.log(
    //   `${lastProduct} ${lastNegativeNumber} ${rollingProduct} ${largestProduct}`
    // );
    let i = nums[j];
    if (i > 0) {
      if (rollingProduct > 0) {
        rollingProduct *= i;
      } else {
        rollingProduct = i;
      }
    }
    if (i === 0) {
      largestProduct = Math.max(largestProduct, rollingProduct);
      lastProduct = Number.MIN_SAFE_INTEGER;
      lastNegativeNumber = Number.MIN_SAFE_INTEGER;
    }
    if (i < 0) {
      if (
        lastProduct > Number.MIN_SAFE_INTEGER &&
        lastNegativeNumber > Number.MIN_SAFE_INTEGER
      ) {
        if (rollingProduct > 0) {
          rollingProduct *= lastProduct * lastNegativeNumber * i;
        } else {
          rollingProduct = lastProduct * lastNegativeNumber * i;
        }
        largestProduct = Math.max(largestProduct, rollingProduct);
        lastProduct = 0;
        lastNegativeNumber = Number.MIN_SAFE_INTEGER;
      } else {
        lastProduct = rollingProduct > 0 ? rollingProduct : 1;
        lastNegativeNumber = i;
        largestProduct = Math.max(largestProduct, rollingProduct);
        rollingProduct = 0;
      }
    }
  }

  return Math.max(largestProduct, rollingProduct);
};

//2
console.log(maxProduct([-2, -1, -1]));

//6
console.log(maxProduct([2, 3, -2, 4]));

//0
console.log(maxProduct([-2, 0, -1]));

//-2
console.log(maxProduct([-2]));

//6
console.log(maxProduct([2, 3]));

//24
console.log(maxProduct([2, -5, -2, -4, 3]));
