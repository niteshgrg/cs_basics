var canCompleteCircuit = function (gas, cost) {
  function tryCompleteCircle(i) {
    if (gas[i] - cost[i] < 0) {
      return false;
    } else {
      let start = i;
      let currentGas = gas[i] - cost[i];
      i++;
      while (i !== start) {
        console.log(i);
        if (i === gas.length) {
          i = 0;
        }
        currentGas += gas[i] - cost[i];
        if (currentGas < 0) {
          return false;
        }
        if (i === start) {
          return true;
        }
        i++;
      }

      return true;
    }
  }
  for (let i = 0; i < gas.length; i++) {
    console.log(i);
    if (tryCompleteCircle(i)) {
      return i;
    }
  }

  return -1;
};

console.log(canCompleteCircuit([3, 1, 1], [1, 2, 2]));
