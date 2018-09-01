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
// DFS, iterative, inorder traversal (left, root, right)
// from output of inorder traversal, previous element has to be less than the next one to have the correct BST
// left < root, root < right
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
var isValidBST = function(root) {
  return valid(root, Number.MAX_SAFE_INTEGER, -Number.MAX_SAFE_INTEGER);
};

const valid = function(root, max, min) {
  if(!root) return true;
  if(root.val >= max || root.val <= min) return false;

  // left subtree are all smaller than current node value, max = current node value
  // right subtree are all larger than current node value, min = current node value
  let leftValid = valid(root.left, root.val, min);
  let rightValid = valid(root.right, max, root.val);

  return leftValid && rightValid;
};
