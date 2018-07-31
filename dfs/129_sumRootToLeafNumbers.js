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
var sumNumbers = function(root) {
  let res = [];
  let sum = 0;

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
};

// var sumNumbers = function(root) {
//   return getSum(root, 0);
// };
//
// // get all sum from each path
// // sum: sum of path up to (before) current node
// const getSum = function(node, sum) {
//   if(!node) return 0;
//
//   if(!node.left && !node.right) return sum*10 + node.val;
//
//   let leftSum = getSum(node.left, sum*10 + node.val);
//   let rightSum = getSum(node.right, sum*10 + node.val);
//
//   return leftSum + rightSum;
// };
