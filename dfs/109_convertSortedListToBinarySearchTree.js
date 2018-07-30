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

  let origHead = head;
  let count = 0;
  // count the length of linked list
  while(head !== null) {
   count++;
   head = head.next;
  }

  let bst = build(origHead, 0, count-1);
  return bst;
};

const build = function(head, low, high) {
  if(low > high || !head) return null;

  let origHead = head;
  let mid = parseInt((low + high)/2);

  // loop through linked list to find the root at mid
  for(let i = 0; i < mid; i++) {
    head = head.next;
  }

  let root = new TreeNode(head.val);
  root.left = build(origHead, low, mid-1);
  root.right = build(origHead, mid+1, high);

  return root;
};
