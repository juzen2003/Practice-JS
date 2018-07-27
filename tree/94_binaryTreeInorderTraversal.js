/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// inorder (left, root, right)
// preorder (root, left, right)
// postorder (left right root)
// iterative
var inorderTraversal = function(root) {
  if(root === null) return [];
  let stack = [];
  let res = [];

  while(root !== null || stack.length !== 0) {
    while(root !== null) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }

  return res;
};

// recursion
// var inorderTraversal = function(root) {
//   let res = [];
//   inorder(root, res);
//   return res;
// };
//
// const inorder = function(root, res) {
//   if(root === null) return;
//
//   inorder(root.left, res);
//   res.push(root.val);
//   inorder(root.right, res);
// };
