/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// to detect a cycle, we used two pointer
// fast: move step by step
// slow: move two steps at a time
// If cycle exists, fast & slow would meet at some point
// algorithm: Tortoise and Hare
// space: O(1)
// time: O(n)
var hasCycle = function(head) {
  if(!head) return false;

  let fast = head;
  let slow = head;
  while(slow && fast && slow.next && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
    if(slow === fast) return true;
  }

  return false;
};
