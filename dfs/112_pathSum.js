/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
// DFS
// preorder traversal: root, left, right
var hasPathSum = function(root, sum) {
  if(!root) return false;

  let stack = [];
  let stackSum = []; // keep track of sum up to each node

  stack.push(root);
  stackSum.push(root.val);

  while(stack.length !== 0) {
    let currentNode = stack.pop();
    let currentSum = stackSum.pop();

    if(!currentNode.left && !currentNode.right && currentSum === sum) return true;

    if(currentNode.right) {
      stack.push(currentNode.right);
      stackSum.push(currentNode.right.val + currentSum);
    }

    if(currentNode.left) {
      stack.push(currentNode.left);
      stackSum.push(currentNode.left.val + currentSum);
    }
  }

  return false;
};

// recursion
// var hasPathSum = function(root, sum) {
//   if(root === null) return false;
//
//   let currentSum = root.val;
//   if(root.left === null & root.right === null && currentSum === sum) return true;
//   return hasPathSum(root.left, sum-currentSum) || hasPathSum(root.right, sum-currentSum);
// };
