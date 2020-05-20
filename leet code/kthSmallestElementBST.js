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
 * @param {number} k
 * @return {number}
 */


var kthSmallest = function(root, k) {
    let stackTillSmallest = [];
    
    var treeTraversal = function(root) {
        if(root == null) {
            return;
        }
        if(stackTillSmallest.length !== k) {
            treeTraversal(root.left);
            if(stackTillSmallest.length !== k) stackTillSmallest.push(root);
            treeTraversal(root.right);
        }
    }
    
    treeTraversal(root);
    
    return stackTillSmallest.pop().val;
};