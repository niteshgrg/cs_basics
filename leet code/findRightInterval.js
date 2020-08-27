var findRightInterval = function (intervals) {
  let intervalWithIndex = intervals
    .map((interval, index) => [interval[0], index])
    .sort((a, b) => {
      if (a[0] != b[0]) {
        return a[0] - b[0];
      } else {
        return a[1] - b[1];
      }
    });

  return intervals.map((interval) => {
    let index = intervalWithIndex.findIndex(
      (element) => element[0] >= interval[1]
    );
    if (index != -1) {
      return intervalWithIndex[index][1];
    }
    return index;
  });
};
