/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
// DFS, iterative, preorder: root, left, right
var pathSum = function(root, sum) {
  if(!root) return [];

  let res = [];
  let stack = [];
  let stackSum =[];
  let stackPath = [];

  stack.push(root);
  stackSum.push(root.val);
  stackPath.push([root.val]);

  while(stack.length !== 0) {
    let currentNode = stack.pop();
    let currentSum = stackSum.pop();
    let currentPath = stackPath.pop();

    if(!currentNode.left && !currentNode.right && currentSum === sum) res.push(currentPath);

    if(currentNode.right) {
      stack.push(currentNode.right);
      stackSum.push(currentNode.right.val + currentSum);
      stackPath.push(currentPath.concat(currentNode.right.val));
    }

    if(currentNode.left) {
      stack.push(currentNode.left);
      stackSum.push(currentNode.left.val + currentSum);
      stackPath.push(currentPath.concat(currentNode.left.val));
    }
  }

  return res;
};

// recursion
// var pathSum = function(root, sum) {
//   let res = [];
//   checkPath(root, sum, [], res);
//   return res;
// };
//
// const checkPath = function(root, sum, path, res) {
//   if(!root) return res;
//
//   path.push(root.val);
//
//   // we copy the path by path.slice() because arr is passed by reference
//   // if we just do res.push(path), whenever path is changed, elements in res would also be changed
//   if(!root.left && !root.right && root.val === sum) res.push(path.slice());
//
//   checkPath(root.left, sum-root.val, path, res);
//   checkPath(root.right, sum-root.val, path, res);
//
//   // backtracking, if solutions are wrong we recover the path to the previous state
//   path.pop();
// };
