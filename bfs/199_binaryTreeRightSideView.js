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
// BFS
var rightSideView = function(root) {
  if(!root) return [];

  let queue = [];
  queue.push(root);
  let res = [];

  while(queue.length !== 0) {
    let size = queue.length;
    let currentNode;

    for(let i = 0; i < size; i++) {
      currentNode = queue.shift();
      if(i === size - 1) res.push(currentNode.val);

      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
  }

  return res;
};
