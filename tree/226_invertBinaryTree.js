/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// BFS, iterative, level order
// TIme: O(n), visit all nodes
var invertTree = function(root) {
  if(!root) return root;

  let queue = [];
  queue.push(root);

  while(queue.length) {
    let currentNode = queue.shift();
    let tmp = currentNode.left;
    currentNode.left = currentNode.right;
    currentNode.right = tmp;

    if(currentNode.left) queue.push(currentNode.left);
    if(currentNode.right) queue.push(currentNode.right);
  }

  return root;
};

// recursion
var invertTree = function(root) {
  if(!root) return root;

  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};
