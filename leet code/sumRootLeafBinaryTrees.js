/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  let lastOutputs = [];

  function traverser(root, value) {
    value = value * 2 + root.val;
    if (root.left === null && root.right === null) {
      lastOutputs.push(value);
      return;
    }

    if (root.left) {
      traverser(root.left, value);
    }

    if (root.right) {
      traverser(root.right, value);
    }
  }

  traverser(root, 0);

  return lastOutputs.reduce((a, b) => a + b, 0);
};
