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
// Sort a linked list in O(n log n) time using constant space complexity.
// time: O(nlogn)
// space: O(1)
var sortList = function(head) {
  if(!head || !head.next) return head;

  let current = head;
  let len = 0;
  while(current) {
    len++;
    current = current.next;
  }

  let dummyHead = new ListNode(null);
  dummyHead.next = head;
  let left, right, tail;

  // i: steps to split the original list and merge, split in following steps 1, 2, 4, 8 ...
  for(let i = 1; i < len; i *= 2) {
    current = dummyHead.next;
    tail = dummyHead;

    while(current) {
      left = current;
      right = splitList(left, i);
      current = splitList(right, i);
      tail = merge(left, right, tail);
    }
  }

  return dummyHead.next;
};

// split a list into two lists, first one with n node
// return the second one
const splitList = function(head, n) {
  for(let i = 1; head && i < n; i++) {
    head = head.next;
  }

  if(!head) return head;
  let second = head.next;
  head.next = null;
  return second;
};

// merge two lists and append to head
// and return the tail of the merged list
const merge = function(l1, l2, tail) {
  let current = tail;
  while(l1 && l2) {
    if(l1.val > l2.val) {
      current.next = l2;
      current = current.next;
      l2 = l2.next;
    } else {
      current.next = l1;
      current = current.next;
      l1 = l1.next;
    }
  }

  if(l1) current.next = l1;
  if(l2) current.next = l2;

  while(current.next) {
    current = current.next;
  }

  return current;
};

// Our solution has space O(logn n) because the recursion called of sortList
// merge sort
// time: O(nlogn)
// space: O(logn)
// var sortList = function(head) {
//   if(!head || !head.next) return head;
//
//   let fast = head;
//   let slow = head;
//   let prev;
//   while(fast && fast.next) {
//     prev = slow;
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//
//   prev.next = null;
//   let l1 = sortList(head);
//   let l2 = sortList(slow);
//
//   return merge(l1, l2);
// };
//
// const merge = function(l1, l2) {
//   if(!l1) return l2;
//   if(!l2) return l1;
//
//   let dummyHead = new ListNode(null);
//   let current = dummyHead;
//
//   while(l1 && l2) {
//     if(l1.val > l2.val) {
//       current.next = l2;
//       current = current.next;
//       l2 = l2.next;
//     } else {
//       current.next = l1;
//       current = current.next;
//       l1 = l1.next;
//     }
//   }
//
//   if(l1) {
//     current.next = l1;
//   }
//
//   if(l2) {
//     current.next = l2;
//   }
//
//   return dummyHead.next;
// };
