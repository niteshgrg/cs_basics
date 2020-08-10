/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let output = 0;

  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i) - 64;

    output += code * Math.pow(26, s.length - 1 - i);
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
