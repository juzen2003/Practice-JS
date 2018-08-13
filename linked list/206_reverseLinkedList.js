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
// iterative
var reverseList = function(head) {
  if(!head || !head.next) return head;

  let dummyHead = new ListNode(null);
  dummyHead.next = head;
  let current = dummyHead;
  let first = current.next;
  let second = first.next;

  while(second) {
    first.next = second.next;
    second.next = current.next;
    current.next = second;
    second = first.next;
  }

  return dummyHead.next;
};

// another way
// var reverseList = function(head) {
//   if(!head || !head.next) return head;
//
//   let prev = null;
//   while(head) {
//     let next = head.next;
//     head.next = prev;
//     prev = head;
//     head = next;
//   }
//
//   return prev;
// };

// recursion
// var reverseList = function(head) {
//   if(!head || !head.next) return head;
//
//   let res = reverseList(head.next);
//   let current = res;
//
//   while(current.next) {
//     current = current.next;
//   }
//
//   current.next = head;
//   head.next = null;
//   return res;
// };
