var countBits = function (num) {
  let i = 0;
  let output = [0];

  while (i <= num) {
    let currRangeTemp = [];
    for (let j of output) {
      currRangeTemp.push(j + 1);
    }
    output = output.concat(currRangeTemp);
    i = output.length;
  }

  return output;
};
