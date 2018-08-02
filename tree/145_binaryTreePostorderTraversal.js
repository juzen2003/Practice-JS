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
// DFS, postorder: left, right, root
// iterative I
var postorderTraversal = function(root) {
  if(!root) return [];
  let stack = [];
  let res = [];

  while(stack.length !== 0 || root) {
    while(root) {
      stack.push(root);
      res.unshift(root.val);
      root = root.right;
    }
    root = stack.pop();
    root = root.left;
  }

  return res;
};

// iterative II
// var postorderTraversal = function(root) {
//   if(!root) return [];
//   let stack = [];
//   let res = [];
//   stack.push(root);
//
//   while(stack.length !== 0) {
//     let currentNode = stack.pop();
//     res.unshift(currentNode.val);
//
//     if(currentNode.left) stack.push(currentNode.left);
//     if(currentNode.right) stack.push(currentNode.right);
//   }
//
//   return res;
// };

// recursion
// var postorderTraversal = function(root) {
//   let res = [];
//   postorder(root, res);
//   return res;
// };
//
// const postorder = function(node, res) {
//   if(!node) return;
//   postorder(node.left, res);
//   postorder(node.right, res);
//   res.push(node.val);
// };
