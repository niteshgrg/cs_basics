var getPermutation = function (n, k) {
  let arr = Array.from(Array(n), (_, i) => i + 1);
  let currSum = k - 1;
  let output = "";

  while (currSum > 0) {
    let fact = sFact(n - 1);
    let index = Math.floor(currSum / fact);
    currSum = currSum % fact;
    let currElement = arr[index];
    arr.splice(index, 1);
    output += currElement;
    n--;
  }
  output += arr.join("");

  return output;
};

function sFact(num) {
  var rval = 1;
  for (var i = 2; i <= num; i++) rval = rval * i;
  return rval;
}
