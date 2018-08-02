/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */

// implement inorder traversal of BST
// inorder traversal would be an increasing value of each node
// Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
// but in our solution, we have
// hasNext(): time O(1) & space O(h)
// next(): time O(h) (due to that while loop) & space O(h)
var BSTIterator = function(root) {
  this.root = root;
  this.stack = [];
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return (this.root || this.stack.length !== 0);
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  while(this.root) {
    this.stack.push(this.root);
    this.root = this.root.left;
  }

  let currentNode = this.stack.pop();
  this.root = currentNode.right;
  return currentNode.val;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
