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
 // BFS
var zigzagLevelOrder = function(root) {
  if(root === null) return [];

  let queue = [];
  queue.push(root);

  let res = [];
  let level = 0;

  while(queue.length !== 0) {
    let size = queue.length;
    let levelArr = [];
    let currentNode;

    for(let i = 0; i < size; i++) {
      if(level % 2 === 0) {
        // left to right
        currentNode = queue.shift();
        levelArr.push(currentNode.val);

        if(currentNode.left !== null) queue.push(currentNode.left);
        if(currentNode.right !== null) queue.push(currentNode.right);
      } else {
        // right to left
        currentNode = queue.pop();
        levelArr.push(currentNode.val);

        if(currentNode.right !== null) queue.unshift(currentNode.right);
        if(currentNode.left !== null) queue.unshift(currentNode.left);
      }
    }

    level++;
    res.push(levelArr);
  }

  return res;
};
