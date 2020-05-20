var singleNonDuplicate = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    
    while(low <= high) {
        let mid = Math.ceil((low + high) / 2);
        mid = nums[mid+1] === nums[mid] ? mid + 1 : mid;
        console.log(`low - ${low}, high- ${high}, mid - ${mid}`);

        
        if(nums[mid-1] !== nums[mid]) return nums[mid];
        
        if(mid%2 === 0) {
            high = mid - 2;
        } else {
            low = mid + 1;
        }
    }
};

singleNonDuplicate([1,1,2,3,3,4,4,8,8]);