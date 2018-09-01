/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 1. at root, move right subtree to the most right end at left subtree
// 2. move the whole left subtree to the right
// 3. set left subtree to null
// 4. continue to root = root.right
// space should be O(1)
// time: O(n),
// currentNode would walk through every node once, but rightMost would at most walk through each node once -> O(n)
var flatten = function(root) {
  let currentNode = root;
  while(currentNode) {
    if(currentNode.left) {
      let rightMost = currentNode.left;

      while(rightMost.right) {
        rightMost = rightMost.right;
      }

      rightMost.right = currentNode.right;
      currentNode.right = currentNode.left;
      currentNode.left = null;
    }

    currentNode = currentNode.right;
  }
};

// recursion
var flatten = function(root) {
  if(!root) return;

  flatten(root.left);
  flatten(root.right);

  let right = root.right;
  root.right = root.left;
  root.left = null;

  let currentNode = root;
  while(currentNode.right) {
    currentNode = currentNode.right;
  }

  currentNode.right = right;
};
