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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (root === null) {
    return [];
  }
  let stack = [root];
  let output = [[root.val]];
  let inverse = true;

  while (stack.length > 0) {
    let children = [];
    stack.forEach((node) => {
      if (node.left !== null) {
        children.push(node.left);
      }
      if (node.right !== null) {
        children.push(node.right);
      }
    });

    let reversed = [...children].reverse();

    let app = inverse ? reversed : children;
    if (app.length > 0) {
      output.push(app.map((node) => node.val));
    }
    inverse = !inverse;
    stack = children;
  }

  return output;
};
