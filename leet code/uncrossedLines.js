/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

var maxUncrossedLines = function(A, B) {
    let dpMatrix = new Array(A.length+1);
    
    for(let i = 0; i < A.length + 1; i++) {
        dpMatrix[i] = [];
        for(let j = 0; j < B.length + 1; j++) {
            if(i === 0 ||j === 0) {
                dpMatrix[i][j] = 0;
            } else {
                if(A[i - 1] === B[j - 1]) {
                    dpMatrix[i][j] = dpMatrix[i-1][j-1] + 1;
                } else {
                    dpMatrix[i][j] = Math.max(dpMatrix[i-1][j], dpMatrix[i][j-1]);
                }
            }
        }
    }
    
    return dpMatrix[A.length][B.length];
    
};

console.log(maxUncrossedLines([1,4,2], [1,2,4]));

console.log(maxUncrossedLines([2,5,1,2,5], [10,5,2,1,5,2]));

console.log(maxUncrossedLines([1,3,7,1,7,5], [1,9,2,5,1]));

console.log(maxUncrossedLines([5,3,3,5,5,3,5,3,5,5], [2,5,5,1,4,5,3,3,2,2,3,2,3,3,1]));