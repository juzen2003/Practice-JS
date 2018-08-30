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
// rotate the list to the right by k places, where k is non-negative
var rotateRight = function(head, k) {
  let dummyHead = new ListNode(null);
  dummyHead.next = head;
  let current = dummyHead;

  let len = 0;
  while(current.next) {
    current = current.next;
    len++;
  }

  k = k % len;

  current.next = head;
  for(let i = 0; i < len - k; i++) {
    current = current.next;
  }

  head = current.next;
  current.next = null;
  return head;
};

// move the last k nodes before head
var rotateRight = function(head, k) {
  let dummyHead = new ListNode(null);
  dummyHead.next = head;
  let current = dummyHead;

  let len = 0;
  while(current.next) {
    current = current.next;
    len++;
  }

  k = k % len;

  let fast = dummyHead;
  let slow = dummyHead;

  while(fast.next) {
    if(k <= 0) {
      slow = slow.next;
    }

    fast = fast.next;
    k--;
  }

  fast.next = head;
  head = slow.next;
  slow.next = null;
  return head;
};
