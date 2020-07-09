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
var widthOfBinaryTree = function (root) {
  let maxWidth = 0;

  let stack = [root];
  let values = [0];

  while (stack.length > 0) {
    let newWidth = values[values.length - 1] - values[0] + 1;
    if (newWidth > maxWidth) {
      maxWidth = newWidth;
    }

    let childrens = [];
    let newValues = [];
    for (let i = 0; i < stack.length; i++) {
      if (stack[i].left !== null) {
        childrens.push(stack[i].left);
        newValues.push(2 * values[i]);
      }
      if (stack[i].right !== null) {
        childrens.push(stack[i].right);
        newValues.push(2 * values[i] + 1);
      }
    }

    stack = childrens;
    values = newValues;
  }

  return maxWidth;
};
