var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let output = [];
  function resurs(sum, index, sol) {
    if (sum === target) {
      output.push([...sol]);
    } else {
      for (let i = index; i < candidates.length; i++) {
        if (sum + candidates[i] <= target)
          resurs(sum + candidates[i], i, [...sol, candidates[i]]);
      }
    }
  }
  resurs(0, 0, []);
  return output;
};
