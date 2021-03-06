/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => (a[0] - b[0] !== 0 ? a[0] - b[0] : b[1] - a[1]));
  let outputArr = [];
  let unFilledIndex = [];

  for (let i = 0; i < people.length; i++) {
    unFilledIndex.push(i);
  }

  for (let i = 0; i < people.length; i++) {
    let emptySlotNum = people[i][1];
    let index = unFilledIndex[emptySlotNum];
    unFilledIndex.splice(emptySlotNum, 1);
    outputArr[index] = people[i];
  }

  return outputArr;
};

//[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
console.log(
  reconstructQueue([
    [4, 4],
    [7, 1],
    [7, 0],
    [5, 0],
    [6, 1],
    [5, 2],
  ])
);

//[[1,0],[2,0],[9,0],[3,1],[1,4],[9,1],[4,2],[7,2],[8,2],[4,5]]
console.log(
  reconstructQueue([
    [8, 2],
    [4, 2],
    [4, 5],
    [2, 0],
    [7, 2],
    [1, 4],
    [9, 1],
    [3, 1],
    [9, 0],
    [1, 0],
  ])
);
