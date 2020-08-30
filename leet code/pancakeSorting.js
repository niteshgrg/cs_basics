/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function (A) {
  let maxNumber = A.length;
  let output = [];

  while (maxNumber > 1) {
    let index = A.findIndex((num) => num === maxNumber);
    A = [...A.slice(0, index + 1).reverse(), ...A.slice(index + 1)];
    A = [...A.slice(0, maxNumber).reverse(), ...A.slice(maxNumber)];
    output.push(index + 1);
    output.push(maxNumber);
    maxNumber--;
  }

  return output;
};
