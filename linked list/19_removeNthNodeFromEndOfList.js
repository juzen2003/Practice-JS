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
// use two pointers to reach to target node at slow.next
var removeNthFromEnd = function(head, n) {
  if(n === 0) return head;

  let dummyHead = new ListNode(null);
  dummyHead.next = head;
  let fast = dummyHead;
  let slow = dummyHead;

  while(fast.next !== null) {
    if(n <= 0) {
      slow = slow.next;
    }

    fast = fast.next;
    n--;
  }

  if(slow.next !== null) {
    slow.next = slow.next.next;
  }

  return dummyHead.next;
};
