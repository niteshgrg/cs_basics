/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let freshOrange = {};
  let badOrange = {};
  let temp = {};
  let count = 0;

  let rowLength = grid.length;
  if (rowLength === 0) {
    return 0;
  }
  let columnLength = grid[0].length;

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      if (grid[i][j] === 1) {
        freshOrange[`${i}${j}`] = true;
      } else if (grid[i][j] === 2) {
        badOrange[`${i}${j}`] = true;
      }
    }
  }

  if (Object.keys(freshOrange).length === 0) {
    return 0;
  }

  let flag = true;
  while (flag) {
    let len = Object.keys(freshOrange).length;

    Object.keys(badOrange).forEach((key) => {
      let ij = key.split("");
      let i = parseInt(ij[0]);
      let j = parseInt(ij[1]);

      let removeKey = `${i + 1}${j}`;
      if (removeKey in freshOrange) {
        delete freshOrange[removeKey];
        temp[removeKey] = true;
      }

      removeKey = `${i - 1}${j}`;
      if (removeKey in freshOrange) {
        delete freshOrange[removeKey];
        temp[removeKey] = true;
      }

      removeKey = `${i}${j + 1}`;
      if (removeKey in freshOrange) {
        delete freshOrange[removeKey];
        temp[removeKey] = true;
      }

      removeKey = `${i}${j - 1}`;
      if (removeKey in freshOrange) {
        delete freshOrange[removeKey];
        temp[removeKey] = true;
      }
    });
    if (
      len === Object.keys(freshOrange).length ||
      Object.keys(freshOrange).length === 0
    ) {
      flag = false;
    }

    badOrange = { ...temp };
    count++;
  }

  return Object.keys(freshOrange).length === 0 ? count : -1;
};
