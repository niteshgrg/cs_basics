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
var verticalTraversal = function (root) {
  if (root === null) {
    return [];
  }
  let hashMap = {};
  let minX = 0;
  let maxX = 0;
  let output = [];

  function traverse(node, index, yIndex) {
    if (node === null) {
      return;
    }

    if (index in hashMap) {
      hashMap[index].push([node.val, yIndex]);
    } else {
      hashMap[index] = [[node.val, yIndex]];
      minX = Math.min(minX, index);
      maxX = Math.max(maxX, index);
    }

    traverse(node.left, index - 1, yIndex - 1);
    traverse(node.right, index + 1, yIndex - 1);
  }

  traverse(root, 0, 0);

  for (let i = minX; i <= maxX; i++) {
    if (i in hashMap) {
      output.push(
        hashMap[i]
          .sort((a, b) => {
            if (a[1] === b[1]) {
              return a[0] - b[0];
            } else {
              return b[1] - a[1];
            }
          })
          .map((x) => x[0])
      );
    }
  }

  return output;
};
