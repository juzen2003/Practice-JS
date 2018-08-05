/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// space O(1)
// time O(n) (get length) + O(n) (reverse list one node by one node) => O(n)
var reverseKGroup = function(head, k) {
  if(k === 1) return head;

  let dummyHead = new ListNode(null);
  dummyHead.next = head;
  let current = dummyHead;

  let len = 0;
  while(current.next) {
    current = current.next;
    len++;
  }

  current = dummyHead;

  while(len >= k) {
    let first = current.next;
    let second = current.next.next;

    for(let i = 1; i < k; i++) {
      first.next = second.next;
      second.next = current.next;
      current.next = second;
      second = first.next;
    }

    current = first;
    len -= k;
  }

  return dummyHead.next;
};
