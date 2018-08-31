/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// DFS, iterative
var binaryTreePaths = function(root) {
  if(!root) return [];

  let stack = [];
  let stackPath = [];
  let res = [];

  stack.push(root);
  stackPath.push(`${root.val}`);

  while(stack.length !== 0) {
    let currentNode = stack.pop();
    let currentPath = stackPath.pop();

    if(!currentNode.left && !currentNode.right) res.push(currentPath);

    if(currentNode.right) {
      stack.push(currentNode.right);
      stackPath.push(currentPath + "->" + currentNode.right.val);
    }

    if(currentNode.left) {
      stack.push(currentNode.left);
      stackPath.push(currentPath + "->" + currentNode.left.val);
    }
  }

  return res;
};

// recursion
var binaryTreePaths = function(root) {
  let res = [];
  getPath(root, [], res);
  return res;
};

const getPath = function(node, path, res) {
  if(!node) return res;

  path.push(node.val);
  if(!node.left && !node.right) {
    let currentPath = path.slice().join("->");
    res.push(currentPath);
  }

  getPath(node.left, path, res);
  getPath(node.right, path, res);

  // backtracking
  path.pop();
};
