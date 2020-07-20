var addBinary = function (a, b) {
  let i = a.length - 1,
    j = b.length - 1;
  let float = 0,
    arrayOut = [];

  while (i >= 0 || j >= 0) {
    let sum;
    if (i >= 0 && j >= 0) {
      sum = parseInt(a[i]) + parseInt(b[j]) + float;
    } else if (i < 0 && j >= 0) {
      sum = parseInt(b[j]) + float;
    } else {
      sum = parseInt(a[i]) + float;
    }
    console.log(sum);

    if (sum === 3) {
      arrayOut.push(1);
      float = 1;
    } else if (sum === 2) {
      arrayOut.push(0);
      float = 1;
    } else if (sum === 1) {
      arrayOut.push(1);
      float = 0;
    } else {
      arrayOut.push(0);
      float = 0;
    }
    i--;
    j--;
  }

  if (float === 1) {
    arrayOut.push(1);
  }
  console.log(arrayOut);

  return arrayOut.reverse().join("");
};

console.log(addBinary("11", "1"));
