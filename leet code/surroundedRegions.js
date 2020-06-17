/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let rowCount = board.length;
  if (rowCount === 0) {
    return [];
  }
  let columnCount = board[0].length;
  let idMap = {};
  let idCount = 1;
  let visitedArray = new Array(rowCount)
    .fill(0)
    .map(() => new Array(columnCount).fill(0));

  const checkAllSides = (i, j, id) => {
    if (i < 0 || i >= rowCount || j < 0 || j >= columnCount) {
      idMap[id] = false;
      return;
    }
    if (visitedArray[i][j]) {
      return;
    }

    visitedArray[i][j] = 1;

    if (board[i][j] === "X") {
      return;
    }
    board[i][j] = id;
    checkAllSides(i + 1, j, id);
    checkAllSides(i - 1, j, id);
    checkAllSides(i, j + 1, id);
    checkAllSides(i, j - 1, id);
  };

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      if (visitedArray[i][j] === 0) {
        if (board[i][j] === "O") {
          idMap[idCount] = true;
          checkAllSides(i, j, idCount);
          idCount++;
        }
      }
      visitedArray[i][j] = 1;
    }
  }

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      if (board[i][j] !== "X") {
        if (idMap[board[i][j]]) {
          board[i][j] = "X";
        } else {
          board[i][j] = "O";
        }
      }
    }
  }

  return board;
};

console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "O", "X"],
  ])
);
