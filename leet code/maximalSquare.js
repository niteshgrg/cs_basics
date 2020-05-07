/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let maxSquare = 0;
    let rowLength = matrix.length;
    if(rowLength === 0) {
        return 0;
    }
    let columnLength = matrix[0].length;
    let dpArray = new Array(rowLength).fill(0).map(() => new Array(columnLength).fill(0));
    
    for(let i = 0; i < rowLength; i++) {
        for(let j = 0; j < columnLength; j++) {
            if(i === 0 || j === 0) {
                dpArray[i][j] = parseInt(matrix[i][j]);
            } else {
                if(matrix[i][j] === "1") {
                    if(dpArray[i-1][j] > 0 && dpArray[i-1][j-1] > 0 && dpArray[i][j-1] > 0) {
                        console.log(`${dpArray[i-1][j]}, ${dpArray[i-1][j-1]}, ${dpArray[i][j-1]}`);
                        dpArray[i][j] = Math.min(dpArray[i-1][j], dpArray[i-1][j-1], dpArray[i][j-1]) + 1;
                    } else {
                        dpArray[i][j] = 1;
                    }
                }
            }
            if(dpArray[i][j] > maxSquare) {
                maxSquare = dpArray[i][j];
            }
        }
    }

    console.log(dpArray);
    return maxSquare*maxSquare;
    
};

console.log(maximalSquare([["0","0","0","1"],["1","1","0","1"],["1","1","1","1"],["0","1","1","1"],["0","1","1","1"]]));
console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));