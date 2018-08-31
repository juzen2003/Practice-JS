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
// DFS, preorder: root, left, right
// iterative I
var preorderTraversal = function(root) {
  if(!root) return [];
  let stack = [];
  let res = [];

  while(root || stack.length !== 0) {
    while(root) {
      stack.push(root);
      // do sth here
      res.push(root.val);
      root = root.left;
    }

    root = stack.pop();
    root = root.right;
  }

  return res;
};

// iterative II
var preorderTraversal = function(root) {
  if(!root) return [];
  let stack = [];
  let res = [];
  stack.push(root);

  while(stack.length !== 0) {
    let currentNode = stack.pop();
    // do sth here
    res.push(currentNode.val);

    if(currentNode.right) stack.push(currentNode.right);
    if(currentNode.left) stack.push(currentNode.left);
  }

  return res;
};

// recursion
var preorderTraversal = function(root) {
  let res = [];
  preorder(root, res);
  return res;
};

const preorder = function(node, res) {
  if(!node) return;
  // do sth here
  res.push(node.val);
  preorder(node.left, res);
  preorder(node.right,res);
};
