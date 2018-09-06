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
// iterative DFS
var isSymmetric = function(root) {
  // test case defines empty tree to return true
  if(root === null) return true;

  let stack = [];

  if(root.left !== null) {
    if(root.right === null) return false;
    stack.push(root.right);
    stack.push(root.left);
  } else if(root.right !== null) {
    return false;
  }

  while(stack.length !== 0) {
    let left = stack.pop();
    let right = stack.pop();

    if(left.val !== right.val) return false;

    if(left.left !== null) {
      if(right.right === null) return false;
      stack.push(right.right);
      stack.push(left.left);
    } else if(right.right !== null) {
      return false;
    }

    if(left.right !== null) {
      if(right.left === null) return false;
      stack.push(right.left);
      stack.push(left.right);
    } else if(right.left !== null) {
      return false;
    }
  }

  return true;
};

// recursive
var isSymmetric = function(root) {
  if(root === null) return true;

  return isMirror(root.left, root.right);
};

const isMirror = function(left, right) {
  if(left === null || right === null) return left === right;

  if(left.val !== right.val) {
    return false;
  } else {
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }
};
