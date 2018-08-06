/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// object is passed by reference in js, so if we want two list, we need to create two instances of object
// store in two lists l1 & l2, and then combine them at the end
// l1, list that contains all nodes less than x in head
// l2, list that contains rest of nodes in head (greater or equal to x)
// one pass
var partition = function(head, x) {
  let h1 = new ListNode(null);
  let l1 = h1;
  let h2 = new ListNode(null);
  let l2 = h2;

  while(head) {
    if(head.val < x) {
      l1.next = head;
      l1 = l1.next;
    } else {
      l2.next = head;
      l2 = l2.next;
    }

    head = head.next;
  }

  l1.next = h2.next;
  l2.next = null;
  return h1.next;
};
