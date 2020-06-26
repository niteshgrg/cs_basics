var sumNumbers = function (root) {
  let nums = [];

  function dfs(root, num) {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null) {
      nums.push(parseInt(num + root.val));
      return;
    } else {
      dfs(root.left, num + root.val);
      dfs(root.right, num + root.val);
    }
  }
  dfs(root, "");

  return nums.reduce((a, b) => a + b, 0);
};
