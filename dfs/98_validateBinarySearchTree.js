/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// DFS, iterative, in order traversal
var isValidBST = function(root) {
  if(root === null) return true;

  let stack = [];
  let prev;

  while(stack.length !== 0 || root !== null) {
    while(root !== null) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    if(prev && prev.val >= root.val) return false;
    prev = root;
    root = root.right;
  }

  return true;
};

// recursion
// var isValidBST = function(root) {
//   return validBST(root, Number.MAX_SAFE_INTEGER, -Number.MAX_SAFE_INTEGER);
// };
//
// const validBST = function(root, max, min) {
//   if(!root) return true;
//   if(root.val >= max || root.val <= min) return false;
//   // left subtree are all smaller than current node value, max = current node value
//   // right subtree are all larger than current node value, min = current node value
//   return validBST(root.left, root.val, min) && validBST(root.right, max, root.val);
// };
