var minPathSum = function (grid) {
  let rowCount = grid.length;
  let columnCount = rowCount > 0 ? grid[0].length : 0;
  for (let i = rowCount - 1; i >= 0; i--) {
    for (let j = columnCount - 1; j >= 0; j--) {
      if (j < columnCount - 1 && i < rowCount - 1) {
        grid[i][j] = grid[i][j] + Math.min(grid[i][j + 1], grid[i + 1][j]);
      } else if (j < columnCount - 1) {
        grid[i][j] = grid[i][j] + grid[i][j + 1];
      } else if (i < rowCount - 1) {
        grid[i][j] = grid[i][j] + grid[i + 1][j];
      } else {
        grid[i][j] = grid[i][j];
      }
    }
  }

  return grid.length > 0 ? (grid[0].length > 0 ? grid[0][0] : 0) : 0;
};

console.log(
  minPathSum([
    [5, 0, 1, 1, 2, 1, 0, 1, 3, 6, 3, 0, 7, 3, 3, 3, 1],
    [1, 4, 1, 8, 5, 5, 5, 6, 8, 7, 0, 4, 3, 9, 9, 6, 0],
    [2, 8, 3, 3, 1, 6, 1, 4, 9, 0, 9, 2, 3, 3, 3, 8, 4],
    [3, 5, 1, 9, 3, 0, 8, 3, 4, 3, 4, 6, 9, 6, 8, 9, 9],
    [3, 0, 7, 4, 6, 6, 4, 6, 8, 8, 9, 3, 8, 3, 9, 3, 4],
    [8, 8, 6, 8, 3, 3, 1, 7, 9, 3, 3, 9, 2, 4, 3, 5, 1],
    [7, 1, 0, 4, 7, 8, 4, 6, 4, 2, 1, 3, 7, 8, 3, 5, 4],
    [3, 0, 9, 6, 7, 8, 9, 2, 0, 4, 6, 3, 9, 7, 2, 0, 7],
    [8, 0, 8, 2, 6, 4, 4, 0, 9, 3, 8, 4, 0, 4, 7, 0, 4],
    [3, 7, 4, 5, 9, 4, 9, 7, 9, 8, 7, 4, 0, 4, 2, 0, 4],
    [5, 9, 0, 1, 9, 1, 5, 9, 5, 5, 3, 4, 6, 9, 8, 5, 6],
    [5, 7, 2, 4, 4, 4, 2, 1, 8, 4, 8, 0, 5, 4, 7, 4, 7],
    [9, 5, 8, 6, 4, 4, 3, 9, 8, 1, 1, 8, 7, 7, 3, 6, 9],
    [7, 2, 3, 1, 6, 3, 6, 6, 6, 3, 2, 3, 9, 9, 4, 4, 8],
  ])
);
