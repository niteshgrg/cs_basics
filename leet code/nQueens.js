/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let possibleSolutions = [];

  let flag = true;

  let stack = [];

  let i = 0;
  let j = 0;

  while (flag) {
    i = stack.length;
    if (j === n && i === 0) {
      flag = false;
      continue;
    }
    if (i === n) {
      possibleSolutions.push([...stack]);
      j = stack.pop()[1] + 1;
      continue;
    }

    if (j === n) {
      j = stack.pop()[1] + 1;
      continue;
    }
    stack.push([i, j]);
    if (checkBoundry(stack)) {
      j = 0;
    } else {
      stack.pop();
      j++;
    }
  }

  possibleSolutions = possibleSolutions.map((solution) => {
    return solution.map((val) => {
      let str = "";
      for (let k = 0; k < n; k++) {
        if (val[1] === k) str += "Q";
        else str += ".";
      }
      return str;
    });
  });
  return possibleSolutions;
};

const checkBoundry = (arr) => {
  let last = arr[arr.length - 1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][0] === last[0] || arr[i][1] === last[1]) {
      return false;
    }

    if (Math.abs(arr[i][1] - last[1]) === Math.abs(arr[i][0] - last[0])) {
      return false;
    }
  }

  return true;
};

console.log(solveNQueens(1));
