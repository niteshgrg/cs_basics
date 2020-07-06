/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  let output = [];

  for (let i = digits.length - 1; i >= 0; i--) {
    let add = digits[i] + carry;
    let remainder = add % 10;
    carry = parseInt(add / 10);

    output.push(remainder);
  }

  if (carry > 0) {
    output.push(carry);
  }

  return output.reverse();
};
