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
// BT
// All of the nodes' values will be unique.
// p and q are different and both values will exist in the binary tree.
// Time O(n), go through all nodes

// for a sub tree rooted at currentNode (full tree starts from root):
// if currentNode is either p or q, the ancestror is currentNode.
// else if we found p & q (or common ancestor) at both left & right, then the ancestor is currentNode as well

// if we only found common ancestor at one side of subtree, then it means p & q are at the same side, that common ancestor at that side is the lowest common ancestor.
var lowestCommonAncestor = function(root, p, q) {
  if(!root) return null;
  if(root === p || root === q) return root;

  let leftSubLCA = lowestCommonAncestor(root.left, p, q);
  let rightSubLCA = lowestCommonAncestor(root.right, p, q);

  if(leftSubLCA && rightSubLCA) {
    // p/q at both sides
    return root;
  } else if(leftSubLCA) {
    // p/q at the left side
    return leftSubLCA;
  } else {
    // p/q at the right side
    return rightSubLCA;
  }
};
