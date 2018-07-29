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
 // a height-balanced binary tree: a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 //
var sortedListToBST = function(head) {
  if(!head) return null;

  let origHead = head;
  let count = 0;
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

  for(let i = 0; i < mid; i++) {
    head = head.next;
  }

  let root = new TreeNode(head.val);
  root.left = build(origHead, low, mid-1);
  root.right = build(origHead, mid+1, high);

  return root;
};
