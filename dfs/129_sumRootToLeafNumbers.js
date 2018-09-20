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
// Method 1:
var sumNumbers = function(root) {
  let res = [];
  let sum = 0;

  // res = getPath(root, [], res);
  getPath(root, [], res);

  for(let i = 0; i < res.length; i++) {
    let currentPath = res[i];
    sum += parseInt(currentPath.join(""));
  }

  return sum;
};

// get all path
const getPath = function(node, path, res) {
  if(!node) return res;

  path.push(node.val);

  if(!node.left && !node.right) res.push(path.slice());
  getPath(node.left, path, res);
  getPath(node.right, path, res);

  // backtracking
  path.pop();
  // return res;
};

// Method 2:
// recursion
var sumNumbers = function(root) {
  return getSum(root, 0);
};

// get all sum from each path
// sum: sum of path up to (before) current node
const getSum = function(node, sum) {
  if(!node) return 0;

  if(!node.left && !node.right) return sum*10 + node.val;

  let leftSum = getSum(node.left, sum*10 + node.val);
  let rightSum = getSum(node.right, sum*10 + node.val);

  return leftSum + rightSum;
};

// Method 3:
// regular iterative way
var sumNumbers = function(root) {
  if(!root) return 0;
  let res = 0;
  let stack = [];
  let stackSum = [];

  stack.push(root);
  stackSum.push(root.val);

  while(stack.length) {
    let currentNode = stack.pop();
    let currentSum = stackSum.pop();

    if(!currentNode.left && !currentNode.right) res += currentSum;

    if(currentNode.right) {
      stack.push(currentNode.right);
      stackSum.push(currentNode.right.val + 10 * currentSum);
    }

    if(currentNode.left) {
      stack.push(currentNode.left);
      stackSum.push(currentNode.left.val + 10 * currentSum);
    }
  }

  return res;
};
