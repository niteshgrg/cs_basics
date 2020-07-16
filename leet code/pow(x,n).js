/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let powerFound = {};
  let pow = (base, power) => {
    if (power === 0) {
      return 1;
    }
    if (power === 1) {
      return base;
    }
    let absInt = Math.abs(Math.floor(power / 2));
    console.log(power);
    if (power < 0) {
      return 1 / (pow(base, absInt) * pow(base, Math.abs(power) - absInt));
    } else {
      let firstPower, secondPower;
      if (absInt in powerFound) {
        firstPower = powerFound[absInt];
      } else {
        firstPower = pow(base, absInt);
        powerFound[absInt] = firstPower;
      }

      if (Math.abs(power) - absInt in powerFound) {
        secondPower = powerFound[Math.abs(power) - absInt];
      } else {
        secondPower = pow(base, Math.abs(power) - absInt);
        powerFound[Math.abs(power) - absInt] = secondPower;
      }
      return firstPower * secondPower;
    }
  };

  return pow(x, n);
};

console.log(myPow(2, 4));
