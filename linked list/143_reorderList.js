/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// space: O(1) in place
// time: O(n)
// 1. find the middle of the list: O(n)
// 2. reverse the second half of the list: O(n)
// 3. re-order one node by one node: O(n)
var reorderList = function(head) {
  if(!head || !head.next) return;

  let dummyHead = new ListNode(null);
  dummyHead.next = head;

  // step 1, find the middle ListNode
  let first = dummyHead;
  let second = dummyHead;
  while(first.next && second.next && second.next.next) {
    first = first.next;
    second = second.next.next;
  }

  // step 2, reverse the 2nd half of the list
  let mid = first;
  first = mid.next;
  second = first.next;
  while(second) {
    first.next = second.next;
    second.next = mid.next;
    mid.next = second;
    second = first.next;
  }

  // step 3, re-order
  first = head;
  second = mid.next;
  while(first !== mid) {
    mid.next = second.next;
    second.next = first.next;
    first.next = second;
    second = mid.next;
    first = first.next.next;
  }

  return;
};
