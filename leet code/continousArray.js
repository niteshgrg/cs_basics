/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let newCount = {"0": [-1]};
    let sum = 0;
    let maxSubarray = 0;
    let length = nums.length;
    for(let i = 0; i < length; i++) {
        sum += (nums[i] ? 1 : -1);
        let convertedKey = String(sum);
        if(convertedKey in newCount) {
            let diff = i - newCount[convertedKey][0];
            maxSubarray = maxSubarray > diff ? maxSubarray : diff;
        } else {
            newCount[String(sum)] = [i];
        }
    }
    return maxSubarray;
    
};