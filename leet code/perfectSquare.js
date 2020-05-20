var isPerfectSquare = function(num) {
    let low = 0;
    let high = num;
    while(low <= high) {
        let mid = Math.ceil((low + high) / 2);
        let square = mid * mid;
        if(square === num) {
            return true;
        }
        if(square < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
console.log(isPerfectSquare(9));