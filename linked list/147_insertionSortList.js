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
// Algorithm of Insertion Sort:

// 1. Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
// 2. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
// 3. It repeats until no input elements remain.
//
// space: O(1);
// time: O(n^2), wc & average
var insertionSortList = function(head) {
  if(!head || !head.next) return head;

  let current = head;

  let sorted = new ListNode(null);
  let sortedCurrent = sorted;

  // loop through input list
  while(current) {
    let nextCurrent = current.next;

    // loop through sorted array to find the location where next node is larger than current node
    while(sortedCurrent.next && sortedCurrent.next.val < current.val) {
      sortedCurrent = sortedCurrent.next;
    }

    // insert current node
    current.next = sortedCurrent.next;
    sortedCurrent.next = current;
    sortedCurrent = sorted;
    current = nextCurrent;
  }

  return sorted.next;
};
