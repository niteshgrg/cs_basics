var arrangeCoins = function (n) {
  let sum = n * 2;
  let low = 0;
  let high = sum;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log(`mid - ${mid}, low - ${low}, high - ${high}`);

    if (mid * (mid + 1) === sum) {
      return mid;
    }

    if (mid * (mid + 1) < sum) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low - 1;
};

console.log(arrangeCoins(8));
