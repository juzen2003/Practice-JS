/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// DFS
// a binary tree in which the depth of the two subtrees of EVERY node never differ by more than 1.
var isBalanced = function(root) {
  if(!root) return true;

  let left = getDepth(root.left);
  let right = getDepth(root.right);

  if(Math.abs(left-right) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
};

const getDepth = function(root) {
  if(!root) return 0;
  return 1 + Math.max(getDepth(root.left), getDepth(root.right));
};
