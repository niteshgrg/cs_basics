/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let visitedArray = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));
    
    let rowCount = visitedArray.length;
    let columnCount = visitedArray[0].length;
    
    for(let i = 0; i < rowCount; i++) {
        for(let j = 0; j < columnCount; j++) {
            if(!(i === 0 || j === 0)) {
                if(text1[i - 1] === text2[j - 1]) {
                    visitedArray[i][j] = 1 + visitedArray[i-1][j-1];
                } else {
                    visitedArray[i][j] = Math.max(visitedArray[i][j-1], visitedArray[i-1][j]);
                }
            }
        }
    }
    return visitedArray[rowCount - 1][columnCount - 1];
    
};