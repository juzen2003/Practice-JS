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
// Iterative, remove all duplicated nodes
var deleteDuplicates = function(head) {
  let dummyHead = new ListNode(null);
  dummyHead.next = head;
  let prev = dummyHead;
  let current = head;

  while(current) {
    while(current.next && current.next.val === current.val) {
      current = current.next;
    }

    if(prev.next === current) {
      prev = prev.next;
    } else {
      prev.next = current.next;
    }

    current = current.next;
  }

  return dummyHead.next;
};

// recursion
// var deleteDuplicates = function(head) {
//   if(!head) return null;
//
//   if(head.next && head.next.val === head.val) {
//     while(head.next && head.next.val === head.val) {
//       head = head.next;
//     }
//     return deleteDuplicates(head.next);
//   } else {
//     head.next = deleteDuplicates(head.next);
//     return head;
//   }
// };
