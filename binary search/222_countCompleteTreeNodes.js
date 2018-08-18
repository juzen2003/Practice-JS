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
// In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2^h nodes inclusive at the last level h.
var countNodes = function(root) {
  if(root === null) return 0;

  let leftCount = countLeftHeight(root);
  let rightCount = countRightHeight(root);

  if(leftCount === rightCount) {
    return Math.pow(2, leftCount + 1) - 1;
  } else {
    return 1 + countNodes(root.left) + countNodes(root.right);
  }
};

const countLeftHeight = function(root) {
  let count = 0;
  while(root.left !== null) {
    count++;
    root = root.left;
  }

  return count;
};

const countRightHeight = function(root) {
  let count = 0;
  while(root.right !== null) {
    count++;
    root = root.right;
  }

  return count;
};
