/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (postorder.length == 0) {
    return null;
  }

  function construstTree(node, inorder, postorder) {
    if (postorder.length === 0) {
      return null;
    }
    node.val = postorder.pop();
    let split = inorder.indexOf(node.val);
    let leftArr = inorder.slice(0, split);
    let rightArr = inorder.slice(split + 1);

    node.left = construstTree(
      new TreeNode(),
      leftArr,
      postorder.slice(0, postorder.length - rightArr.length)
    );
    node.right = construstTree(
      new TreeNode(),
      rightArr,
      postorder.slice(postorder.length - rightArr.length)
    );

    return node;
  }

  let root = new TreeNode();

  construstTree(root, inorder, postorder);

  return root;
};
