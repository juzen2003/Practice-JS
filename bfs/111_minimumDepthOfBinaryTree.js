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
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// Note: A leaf is a node with no children.
// BFS
var minDepth = function(root) {
  if(root === null) return 0;
  let queue = [];
  let depth = 0;
  queue.push(root);

  while(queue.length !== 0) {
    let size = queue.length;
    let currentNode;
    depth++;

    for(let i = 0; i < size; i++) {
      currentNode = queue.shift();

      if(currentNode.left === null && currentNode.right === null) return depth;
      if(currentNode.left !== null) queue.push(currentNode.left);
      if(currentNode.right !== null) queue.push(currentNode.right);
    }
  }
};

// recursion
// var minDepth = function(root) {
//   if(root === null) return 0;
//   let left = minDepth(root.left);
//   let right = minDepth(root.right);
//
//   let res = (left === 0 || right === 0) ? 1 + left + right : 1 + Math.min(left, right);
//   return res;
// };
