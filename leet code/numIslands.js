var numIslands = function(grid) {
    
    let rowCount = grid.length;
    let columnCount = grid[0].length;
    let visitedArray = new Array(rowCount).fill(0).map(() => new Array(columnCount).fill(0));;
    let count = 0;
    
    const checkAllSides = function(i, j) {
        if(visitedArray[i][j] === 1) {
            return;
        }
        visitedArray[i][j] = 1;
        if(grid[i][j] === "1") {
            if(i+1 < rowCount) checkAllSides(i+1, j);
            if(i-1 > -1) checkAllSides(i-1, j);
            if(j+1 < columnCount) checkAllSides(i, j+1);
            if(j-1 > -1) checkAllSides(i, j-1);
        }
        
    }
        
    for(let i = 0; i < rowCount; i++) {
        for(let j = 0; j < columnCount; j++) {
            if(visitedArray[i][j] === 0) {
                if(grid[i][j] === "1") {
                    count++;
                    checkAllSides(i, j);
                }
            }
            visitedArray[i][j] = 1;
        }
    }
    return count;  
};

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]));

// 1  1  1  0
// 1  1  1  0
// 1  0  0  0
// 1  1  0  0
// 0  0  0  0