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
// to detect a cycle, we used two pointer
// fast: move 2 steps at a time
// slow: move 1 step at a time
// If cycle exists, fast & slow would meet at some point
// At this time, we start to move another entry node from head
// when entry node met slow, that point is the entry point

// L1 is defined as the distance between the head point and entry point

// L2 is defined as the distance between the entry point and the meeting point

// C is defined as the length of the cycle

// n is defined as the travel times of the fast pointer around the cycle When the first encounter of the slow pointer and the fast pointer, some value >= 1

// According to the definition of L1, L2 and C, we can obtain:

// the total distance of the slow pointer traveled when encounter is L1 + L2

// the total distance of the fast pointer traveled when encounter is L1 + L2 + n * C

// Because the total distance the fast pointer traveled is twice as the slow pointer, Thus:

// 2 * (L1+L2) = L1 + L2 + n * C => L1 + L2 = n * C => L1 = (n - 1) C + (C - L2)*

// It can be concluded that the distance between the head location and entry location is equal to the distance between the meeting location and the entry location along the direction of forward movement + a multiple of cycle length.

// So, when the slow pointer and the fast pointer encounter in the cycle, we can define a pointer "entry" that point to the head, this "entry" pointer moves one step each time so as the slow pointer. When this "entry" pointer and the slow pointer both point to the same location, this location is the node where the cycle begins.

var detectCycle = function(head) {
  if(!head) return null;
  let fast = head;
  let slow = head;
  let entry = head;

  // while(slow && slow.next && fast && fast.next && fast.next.next) {
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if(slow === fast) {
      while(slow !== entry) {
        slow = slow.next;
        entry = entry.next;
      }

      return entry;
    }
  }

  return null; // if there is no cycle
};
