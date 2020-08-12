/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let array = [1, 1];
  if (rowIndex === 0) {
    return [1];
  }

  if (rowIndex === 1) {
    return [1, 1];
  }

  for (let i = 0; i <= rowIndex - 2; i++) {
    array.unshift(1);
    for (let j = 1; j < array.length - 1; j++) {
      array[j] += array[j + 1];
    }
  }

  return array;
};
