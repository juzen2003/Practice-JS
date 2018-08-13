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
// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// space: O(1) in place
// time: O(n)
// 1. find the middle of the list: O(n)
// 2. reverse the second half of the list: O(n)
// 3. re-order one node by one node: O(n)
var reorderList = function(head) {
  if(!head || !head.next || !head.next.next) return;

  // step 1, find the middle ListNode
  let first = head;
  let second = head;
  while(second && second.next) {
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
  while(second) {
    mid.next = second.next;
    second.next = first.next;
    first.next = second;
    second = mid.next;
    first = first.next.next;
  }

  return;
};
