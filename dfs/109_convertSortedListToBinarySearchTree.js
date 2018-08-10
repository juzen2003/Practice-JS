/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
 // DFS,
// an ascending ll of a BST is actually the output of inorder traversal: left, root, right
// convert an ascending ll into a height-balanced BST
// If it's a height balanced BST, the middle node (mid) would be the root of each section of inorder traversal
// a height-balanced binary tree: a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
var sortedListToBST = function(head) {
  if(!head) return null;
  let current = new ListNode(null);
  current.next = head;

  let len = 0;
  while(current.next) {
    current = current.next;
    len++;
  }

  let bst = build(head, 0, len-1);
  return bst;
};

const build = function(head, low, high) {
  if(low > high || !head) return null;
  let current = new ListNode(null);
  current.next = head;

  let mid = parseInt((low + high)/2);
  // try to mimic arr, i = 0, first node
  for(let i = 0; i <= mid; i++) {
    current = current.next;
  }

  let root = new TreeNode(current.val);
  root.left = build(head, low, mid-1);
  root.right = build(head, mid+1, high);

  return root;
};

// var sortedListToBST = function(head) {
//   let current = new ListNode(null);
//   current.next = head;
//
//   let len = 0;
//   while(current.next) {
//     current = current.next;
//     len++;
//   }
//
//   let bst = build(head, 0, len-1);
//   return bst;
// };
//
// const build = function(head, low, high) {
//   let current = new ListNode(null);
//   current.next = head;
//
//   let mid = parseInt((low + high)/2);
//   for(let i = 0; i <= mid; i++) {
//     current = current.next;
//   }
//
//   let root = new ListNode(current.val);
//   root.left = build(head, 0, mid-1);
//   root.right = build(head, mid+1, high);
//
//   return root;
// };
