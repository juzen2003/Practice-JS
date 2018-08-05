/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// BST
// The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).
// All of the nodes' values will be unique.
// p and q are different and both values will exist in the BST.
var lowestCommonAncestor = function(root, p, q) {
  if(!root) return root;

  while(root) {
    if(root.val > p.val && root.val > q.val) {
      // root too big, go to left subtree
      root = root.left;
    } else if(root.val < p.val && root.val < q.val) {
      // root too small, go to right subtree
      root = root.right;
    } else {
      return root;
    }
  }
};
