var search = function(nums, target) {
    let pivotPoint = -1;
    let foundIndex = -1;

    function findPivot(left, right) {
        if (left > right) return;

        let mid = Math.floor((left + right)/2);


        console.log(`middle ${mid}, ${nums[mid]}, ${nums[right]}`);

        if (nums[mid] > nums[mid+1]) {
            pivotPoint = mid;
            return;
        } else if (left === right) {
            pivotPoint = mid;
        } else if (nums[left] > nums[mid]) {
            findPivot(left, mid-1);
        } else {
            findPivot(mid+1, right);
        }
    }
    if(nums[0] > nums[nums.length - 1]) findPivot(0, nums.length - 1);
    console.log(pivotPoint)

    function searchNumber(left, right) {
        if (left > right) return;
        console.log(`left${left}, ${right}`)

        let mid = Math.floor((left + right)/2);

        if (nums[mid] === target) {
            foundIndex = mid;
            return;
        } else if(left === right) {
            return;
        } else if (nums[mid] > target) {
            searchNumber(left, mid - 1);
        } else if (nums[mid] < target) {
            searchNumber(mid + 1, right);
        }
    }
    if(nums[0] <= target && nums[pivotPoint] >= target) {
        searchNumber(0, pivotPoint);
    } else if (nums[pivotPoint + 1] <= target && nums[nums.length - 1] >= target){
        searchNumber(pivotPoint + 1, nums.length - 1)
    }
    return foundIndex;
};

console.log(search([9,0,2,7,8], 3));

