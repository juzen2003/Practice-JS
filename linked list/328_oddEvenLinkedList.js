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
// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ...
// Time: O(n)
// Space: O(1)
var oddEvenList = function(head) {
  if(!head || !head.next || !head.next.next) return head;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while(even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
};
