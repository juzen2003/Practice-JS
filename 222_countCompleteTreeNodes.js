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
var countNodes = function(root) {
  if(root === null) return 0;

  let leftHeight = leftHeightCount(root);
  let rightHeight = rightHeightCount(root);
  let total = 0;


  if(leftHeight === rightHeight) {
    total = Math.pow(2, leftHeight + 1) - 1;

  } else {
    total = 1 + countNodes(root.left) + countNodes(root.right);
  }

  return total;
};

const leftHeightCount = function(root) {
  let leftHeight = 0;

  while(root.left !== null) {
    root = root.left;
    leftHeight += 1;
  }

  return leftHeight;
};

const rightHeightCount = function(root) {
  let rightHeight = 0;

  while(root.right !== null) {
    root = root.right;
    rightHeight += 1;
  }

  return rightHeight;
};
