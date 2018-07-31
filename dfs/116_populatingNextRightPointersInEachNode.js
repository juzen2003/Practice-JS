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
// input would be perfect binary tree
// space O(1)
// time O(n)
// by default .next = null
// Solution that works for skewed binary tree
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

// use level order but use the parent to update the next level's next
// works for perfect binary tree only
// var connect = function(root) {
//   if(!root) return;
//
//   let prev = root;
//   while(prev.left) {
//     let currentNode = prev;
//     while(currentNode) {
//       currentNode.left.next = currentNode.right;
//
//       if(currentNode.next) {
//         currentNode.right.next = currentNode.next.left;
//       }
//
//       currentNode = currentNode.next;
//     }
//
//     prev = prev.left;
//   }
// };
