// Given a linked list, remove the n-th node from the end of list and return its head.
//
// Example:
//
// Given linked list: 1->2->3->4->5, and n = 2.
//
// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
//
// Given n will always be valid.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let length = 1;
  // head points to the first node
  let start = head;
  while(start.next !== null) {
    start = start.next;
    length++;
  }

  if(length === 1 && n === 1) {
      return [];
  }

  start = head;
  let nthNode = length - n;
  if(nthNode === 0) {
    head = start.next;
    return head;
  } else {
    let i = 1;
    while(i !== nthNode) {
      start = start.next;
      i++;
    }
    // console.log(i);
    // console.log(start.val)

    let removeNode = start.next;
    start.next = removeNode.next;

    return head;
  }
};
