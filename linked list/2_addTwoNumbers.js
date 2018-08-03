/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // dummy head to store the final result at head.next
  let head = new ListNode(null);
  let current = head;

  let carry = 0;

  while(l1 || l2 || carry) {
    let sum = 0;

    if(l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if(l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    sum += carry;
    carry = parseInt(sum / 10);
    sum = sum % 10;

    current.next = new ListNode(sum);
    current = current.next;
  }

  return head.next;
};
