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
// 1. reverse the 2nd half
// 2. compare 1st & 2nd half
var isPalindrome = function(head) {
  if(!head || !head.next) return true;

  // find middle node
  let fast = head;
  let slow = head;
  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // if it's odd, we move slow to the next of middle node
  if(fast) {
    slow = slow.next;
  }
  // reverse second half
  slow = reverseList(slow);

  fast = head;
  let res = slow;

  while(slow) {
    if(slow.val !== fast.val) {
      // restore input
      reverseList(res);
      return false;
    }
    fast = fast.next;
    slow = slow.next;
  }
  // restore input
  reverseList(res);
  return true;
};

// reverse the list and return head of reversed list
const reverseList = function(head) {
  let prev = null;
  while(head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
};
