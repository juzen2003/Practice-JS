/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// DFS
// BST
// find 2 elements in inorder traversal when previous node is larger than current node (prev.val >= currentNode.val)
// 1st el is the prev (larger one, too big)
// 2nd el is the current node (smaller one, too small), find the last one
// after finish inorder traversal, swap 1st and 2nd to recover bst
var recoverTree = function(root) {
  if(root === null) return;

  let stack = [];
  let first;
  let sec;
  let prev;

  while(stack.length !== 0 || root !== null) {
    while(root !== null) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    if(prev && prev.val >= root.val) {
      if(!first) {
        first = prev;
      }

      if(first) {
        sec = root;
      }
    }

    prev = root;
    root = root.right;
  }

  // swapping 1st & 2nd el
  let tmp = first.val;
  first.val = sec.val;
  sec.val = tmp;
  return;
};
