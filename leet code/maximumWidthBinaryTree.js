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

  while (stack.length > 0) {
    if (stack.length > maxWidth) {
      maxWidth = stack.length;
    }

    let childrens = [];
    for (let node of stack) {
      if (node === null) {
        childrens.push(null);
        childrens.push(null);
      } else {
        childrens.push(node.left);
        childrens.push(node.right);
      }
    }

    while (childrens[childrens.length - 1] === null) {
      childrens.pop();
    }

    while (childrens.length > 0 && childrens[0] === null) {
      childrens.shift();
    }
    stack = childrens;
  }

  return maxWidth;
};
