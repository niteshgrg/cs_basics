/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  function treeInorder(root) {
    if (root == null) {
      return [];
    } else {
      return [...treeInorder(root.left), root.val, ...treeInorder(root.right)];
    }
  }

  let sorted1 = treeInorder(root1);
  let sorted2 = treeInorder(root2);

  // console.log(sorted1);
  // console.log(sorted2);

  let i = 0,
    j = 0;
  let output = [];

  while (i < sorted1.length && j < sorted2.length) {
    if (sorted1[i] <= sorted2[j]) {
      output.push(sorted1[i]);
      i++;
    } else {
      output.push(sorted2[j]);
      j++;
    }
  }

  if (i >= sorted1.length) {
    return [...output, ...sorted2.slice(j)];
  } else {
    return [...output, ...sorted1.slice(i)];
  }
};
