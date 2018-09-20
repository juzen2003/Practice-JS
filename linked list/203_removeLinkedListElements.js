/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// Time: O(n)
// space: O(1)
var removeElements = function(head, val) {
  let dummyHead = new ListNode(null);
  dummyHead.next = head;
  let prev = dummyHead;
  let current = head;

  while(current) {
    while(current && current.val === val) {
      current = current.next;
    }

    prev.next = current;
    prev = prev.next;
    if(current) current = current.next; // if is there for the case when current reach to last null
  }

  return dummyHead.next;
};
