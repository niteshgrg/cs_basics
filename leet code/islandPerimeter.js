var islandPerimeter = function (grid) {
  let rowLength = grid.length;
  let columnLength = rowLength > 0 ? grid[0].length : 0;
  let visited = new Array(rowLength)
    .fill(0)
    .map(() => new Array(columnLength).fill(0));

  let indexFound = false;
  let firstOneRow, firstOneColumn;
  let perimiter = 0;

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      if (grid[i][j] === 1) {
        indexFound = true;
        callAllSides(i, j);
        break;
      }
      visited[i][j] = 1;
    }

    if (indexFound) {
      break;
    }
  }

  function callAllSides(i, j) {
    if (i < 0 || i >= rowLength || j < 0 || j >= columnLength) {
      return;
    }

    if (visited[i][j]) {
      return;
    }
    visited[i][j] = 1;

    if (grid[i][j] === 1) {
      if (i + 1 >= rowLength || grid[i + 1][j] === 0) {
        perimiter++;
      } else {
        callAllSides(i + 1, j);
      }

      if (i - 1 < 0 || grid[i - 1][j] === 0) {
        perimiter++;
      } else {
        callAllSides(i - 1, j);
      }

      if (j + 1 >= columnLength || grid[i][j + 1] === 0) {
        perimiter++;
      } else {
        callAllSides(i, j + 1);
      }

      if (j - 1 < 0 || grid[i][j - 1] === 0) {
        perimiter++;
      } else {
        callAllSides(i, j - 1);
      }
    }
  }

  return perimiter;
};
