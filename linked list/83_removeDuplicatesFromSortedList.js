/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Iterative, delete all duplicates such that each element appear only once
var deleteDuplicates = function(head) {
  let dummyHead = new ListNode(null);
  dummyHead.next = head;
  // prev is the previous node of current
  let current = head;
  let prev = dummyHead;

  while(current) {
    while(current.next && current.next.val === current.val) {
      current = current.next;
    }

    if(prev.next === current) {
      prev = prev.next;
      current = current.next;
    } else {
      prev.next = current;
      // add these two lines here would work as well (help out on logic)
      // prev = prev.next;
      // current = current.next;
    }
  }

  return dummyHead.next;
};

// recursion
var deleteDuplicates = function(head) {
  if(!head) return null;

  while(head.next && head.next.val === head.val) {
    head = head.next;
  }

  head.next = deleteDuplicates(head.next);
  return head;
};
