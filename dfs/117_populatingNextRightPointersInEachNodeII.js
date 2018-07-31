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
// input could be skewed binary tree
// we used a dummy head to keep track next level, and head.next to move from current level to next level
// space O(1)
// time O(n)
// by default .next = null
var connect = function(root) {
  let head = new TreeLinkNode(0);
  let prev = head;
  let currentNode = root;

  while(currentNode) {
    if(currentNode.left) {
      prev.next = currentNode.left;
      prev = prev.next;
    }

    if(currentNode.right) {
      prev.next = currentNode.right;
      prev = prev.next;
    }

    currentNode = currentNode.next;
    if(!currentNode) {
      // restore prev to dummy head to store nodes at new level
      prev = head;
      // get the first node at the next level
      currentNode = head.next;
      head.next = null;
    }
  }
};
