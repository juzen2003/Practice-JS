/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if(!root) return null;

  let queue = [];
  let res = [];
  queue.push(root);

  while(queue.length !== 0) {
    let currentNode = queue.shift();

    if(!currentNode) {
      res.push(null);
    } else {
      res.push(currentNode.val);
    }

    if(currentNode) {
      queue.push(currentNode.left);
      queue.push(currentNode.right);
    }
  }

  // remove uneccssary trailing null for last level
  while(res[res.length-1] === null) {
    res.pop();
  }

  return JSON.stringify(res);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if(!data) return null;
  let input = JSON.parse(data);

  let root = new TreeNode(input[0]);
  let count = 1;
  let queue = [];
  queue.push(root);

  while(queue.length !== 0) {
    let currentNode = queue.shift();

    if(input[count] !== undefined && input[count] !== null) {
      let left = new TreeNode(input[count]);
      currentNode.left = left;
      queue.push(left);
    }

    count++;

    if(input[count] !== undefined && input[count] !== null) {
      let right = new TreeNode(input[count]);
      currentNode.right = right;
      queue.push(right);
    }

    count++;
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
