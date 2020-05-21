var countSquares = function(matrix) {
    let rowLength = matrix.length;
    let columnLength = rowLength > 0 ? matrix[0].length : 0;
    let dpArray = new Array(rowLength).fill(0).map(() => new Array(columnLength).fill(0));
    let sum = 0;
    
    for(let i = 0; i < rowLength; i++) {
        for(let j = 0; j < columnLength; j++) {
            let currElement = 0;
            if(i === 0 || j === 0) {
                currElement = matrix[i][j];
            } else {
                if(matrix[i][j] === 1) {
                    currElement = Math.min(dpArray[i-1][j-1], dpArray[i-1][j], dpArray[i][j-1]) + 1;
                }
            }
            dpArray[i][j] = currElement;
            sum += currElement;
        }
    }
    
    return sum;
};