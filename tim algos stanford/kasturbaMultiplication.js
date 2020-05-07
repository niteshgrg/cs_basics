function kasturbaMultiplication(x, y) {
  let numDigits = String(x).length;
  if (numDigits === 1) {
    return x * y;
  }
  let nMultiplier = Math.ceil(parseFloat(numDigits) / 2);
  let a = parseInt(x / Math.pow(10, nMultiplier));
  let c = parseInt(y / Math.pow(10, nMultiplier));
  let b = x - a * Math.pow(10, nMultiplier);
  let d = y - c * Math.pow(10, nMultiplier);
  console.log(a, b, c, d);
  let acMultiplication = kasturbaMultiplication(a, c);
  let bdMultiplication = kasturbaMultiplication(b, d);
  let resultMultiplicaiton =
    Math.pow(10, nMultiplier * 2) * acMultiplication +
    Math.pow(10, nMultiplier) *
      (kasturbaMultiplication(a + b, c + d) -
        acMultiplication -
        bdMultiplication) +
    bdMultiplication;
  return resultMultiplicaiton;
}
