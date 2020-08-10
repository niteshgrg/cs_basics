/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let arr = s.split("");

  let output = 0;

  for (let i = 0; i < arr.length; i++) {
    let code = arr[i].charCodeAt() - 64;

    output += code * Math.pow(26, arr.length - 1 - i);
  }

  return output;
};

//1
console.log(titleToNumber("A"));

//28
console.log(titleToNumber("AB"));

//701
console.log(titleToNumber("ZY"));

//18227
console.log(titleToNumber("ZYA"));
