/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// DFS
// A path can go up and go down, but once it goes down, it can't go up again
var maxPathSum = function(root) {
  let maxVal = [Number.MIN_SAFE_INTEGER];
  maxPathDown(root, maxVal);
  return maxVal[0];
};

// get the sum from current node to leaf and continuously update maxVal[0]
const maxPathDown = function(node, maxVal) {
  if(!node) return 0;

  let leftSum = Math.max(0, maxPathDown(node.left, maxVal));
  let rightSum = Math.max(0, maxPathDown(node.right, maxVal));

  maxVal[0] = Math.max(maxVal[0], node.val + leftSum + rightSum);
  return node.val + Math.max(leftSum, rightSum);
};
