/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
// space O(1)
// time O(n)
// by default .next = null
// use level order but use the parent to update the next level's next
var connect = function(root) {
  if(!root) return;

  let prev = root;
  while(prev.left) {
    let currentNode = prev;
    while(currentNode) {
      currentNode.left.next = currentNode.right;

      if(currentNode.next) {
        currentNode.right.next = currentNode.next.left;
      }

      currentNode = currentNode.next;
    }

    prev = prev.left;
  }
};
