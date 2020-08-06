var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let output = [];
  function resurs(sum, index, sol) {
    if (sum === target) {
      output.push([...sol]);
    } else {
      for (let i = index; i < candidates.length; i++) {
        if (sum + candidates[i] <= target)
          resurs(sum + candidates[i], i + 1, [...sol, candidates[i]]);
        while (i < candidates.length - 1 && candidates[i] === candidates[i + 1])
          ++i;
      }
    }
  }

  resurs(0, 0, []);

  return output;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
