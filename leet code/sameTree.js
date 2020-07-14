/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let tree1Stack = [p],
    tree2Stack = [q];

  if (p === null || q === null) {
    if (p === q) {
      return true;
    } else {
      return false;
    }
  }

  if (p.val !== q.val) {
    return false;
  }

  while (tree1Stack.length > 0 && tree2Stack.length > 0) {
    let children1 = [],
      children2 = [];
    let childIndex = 0;

    while (childIndex < tree1Stack.length) {
      let leftChild1 = tree1Stack[childIndex].left;
      let leftChild2 = tree2Stack[childIndex].left;

      if (leftChild1 === null || leftChild2 === null) {
        if (leftChild2 !== leftChild1) {
          return false;
        }
      } else {
        if (leftChild1.val === leftChild2.val) {
          children1.push(leftChild1);
          children2.push(leftChild2);
        } else {
          return false;
        }
      }

      let rightChild1 = tree1Stack[childIndex].right;
      let rightChild2 = tree2Stack[childIndex].right;

      if (rightChild1 === null || rightChild2 === null) {
        if (rightChild2 !== rightChild1) {
          return false;
        }
      } else {
        if (rightChild1.val === rightChild2.val) {
          children1.push(rightChild1);
          children2.push(rightChild2);
        } else {
          return false;
        }
      }

      childIndex++;
    }
    tree1Stack = children1;
    tree2Stack = children2;
  }

  return true;
};
