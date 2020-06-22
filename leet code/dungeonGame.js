var calculateMinimumHP = function (dungeon) {
  let rowCount = dungeon.length;
  if (rowCount === 0) {
    return 0;
  }
  let columnCount = dungeon[0].length;
  let dpArray = new Array(rowCount)
    .fill(0)
    .map(() => new Array(columnCount).fill(0));

  for (let i = rowCount - 1; i >= 0; i--) {
    for (let j = columnCount - 1; j >= 0; j--) {
      if (i === rowCount - 1 && j === columnCount - 1) {
        dpArray[i][j] = Math.abs(Math.min(dungeon[i][j] - 1, 1));
      } else if (i === rowCount - 1) {
        dpArray[i][j] = dpArray[i][j + 1] - dungeon[i][j];
      } else if (j === columnCount - 1) {
        dpArray[i][j] = dpArray[i + 1][j] - dungeon[i][j];
      } else {
        dpArray[i][j] =
          Math.min(dpArray[i + 1][j], dpArray[i][j + 1]) - dungeon[i][j];
      }
      if (dpArray[i][j] <= 0) {
        dpArray[i][j] = 1;
      }
    }
  }
  return dpArray[0][0];
};
