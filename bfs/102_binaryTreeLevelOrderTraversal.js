/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// Binary tree level order traversal
// BFS
var levelOrder = function(root) {
  if(root === null) return [];
  let queue = [];
  let res = [];
  queue.push(root);

  while(queue.length !== 0) {
    let size = queue.length;
    let levelArr = [];
    let currentNode;

    // loop through each level
    for(let i = 0; i < size; i++) {
      currentNode = queue.shift();
      levelArr.push(currentNode.val);

      if(currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if(currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    res.push(levelArr);
  }

  return res;
};
