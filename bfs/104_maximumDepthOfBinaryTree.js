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
// BFS, count all levels
var maxDepth = function(root) {
  if(!root) return 0;

  let queue = [];
  let depth = 0;

  queue.push(root);

  while(queue.length !== 0) {
    let size = queue.length;
    let currentNode;
    depth++;

    for(let i = 0; i < size; i++) {
      currentNode = queue.shift();
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
  }

  return depth;
};

// recursion
var maxDepth = function(root) {
    if(!root) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
