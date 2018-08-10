/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// one pass
var reverseBetween = function(head, m, n) {
  if(!head || m === n) return head;

  let dummyHead = new ListNode(null);
  dummyHead.next = head;
  let current = dummyHead;

  // reach to the node before m
  for(let i = 1; i < m; i++) {
    current = current.next;
  }

  let first = current.next;
  let second = current.next.next;

  // reverse node between m to n
  for(let j = 0; j < n-m; j++) {
    first.next = second.next;
    second.next = current.next;
    current.next = second;
    second = first.next;
  }

  return dummyHead.next;
};
