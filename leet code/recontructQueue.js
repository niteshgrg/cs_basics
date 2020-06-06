/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => (a[0] - b[0] !== 0 ? a[0] - b[0] : b[1] - a[1]));
  let outputArr = [];
  let filledIndex = [];

  for (let i = 0; i < people.length; i++) {
    let index = people[i][1];
    let allsmallerFilledIndex = filledIndex.filter((x) => x <= index).length;
    let newAllsmallerFilledIndex = filledIndex.filter(
      (x) => x <= index + allsmallerFilledIndex
    ).length;

    while (allsmallerFilledIndex !== newAllsmallerFilledIndex) {
      allsmallerFilledIndex = newAllsmallerFilledIndex;
      newAllsmallerFilledIndex = filledIndex.filter(
        (x) => x <= index + allsmallerFilledIndex
      ).length;
    }
    index += allsmallerFilledIndex;
    filledIndex.push(index);
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

// [[1,0],[2,0],,[3,1],[1,4],,,,[4,5]]
