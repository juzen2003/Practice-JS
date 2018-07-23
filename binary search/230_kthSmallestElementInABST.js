/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 // Kth smallest in BST
var kthSmallest = function(root, k) {
  let count = countNodes(root.left);

  if(count + 1 === k) {
    return root.val;
  } else if(count + 1 > k) {
    return kthSmallest(root.left, k);
  } else if (count + 1 < k) {
    return kthSmallest(root.right, k - count - 1);
  }
};

const countNodes = function(root) {
  if(root === null) return 0;

  return 1 + countNodes(root.left) + countNodes(root.right);
};
