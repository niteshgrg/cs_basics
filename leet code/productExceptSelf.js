var productExceptSelf = function(nums) {
    let L = nums[0];
    let length = nums.length;
    let R = nums[length - 1];
    let returnArray = [1];
    for (let i = 1; i < length; i++) {
        returnArray.push(returnArray[i-1] * L);
        L = nums[i];
    }
    console.log(returnArray)
    for (let i = length - 2; i >= 0; i--) {
        returnArray[i] = returnArray[i] * R;
        R = nums[i]*R;
    }
    return returnArray;
};

console.log(productExceptSelf([4,3,2,1,2]))