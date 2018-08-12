/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 // time: O(n)
 // space: O(1)
 // 1. get the diff of 2 lists
 // 2. from longer list, move diff steps so that both lists would start moving with the same length
 // 3. both lists start moving with the same length, return where they meet, if null, means there is no intersection
var getIntersectionNode = function(headA, headB) {
  let currentA = headA;
  let lenA = 0;
  while(currentA) {
    currentA = currentA.next;
    lenA++;
  }

  let currentB = headB;
  let lenB = 0;
  while(currentB) {
    currentB = currentB.next;
    lenB++;
  }

  currentA = headA;
  currentB = headB;
  while(lenA > lenB) {
    currentA = currentA.next;
    lenA--;
  }
  while(lenA < lenB) {
    currentB = currentB.next;
    lenB--;
  }

  while(currentA !== currentB) {
    currentA = currentA.next;
    currentB = currentB.next;
  }

  return currentA;
};

// tracky and smart way
// 1. start moving from both lists
// 2. when first pointer reach to end, move it to the head of another list (differ from where the pointer start)
// 3. when second pointer reach to end, move it to the head of another list
// 4. At this time, both pointers would start from the same place
// var getIntersectionNode = function(headA, headB) {
//   let currentA = headA;
//   let currentB = headB;
//
//   while(currentA !== currentB) {
//     currentA = currentA === null ? headB : currentA.next;
//     currentB = currentB === null ? headA : currentB.next;
//   }
//
//   return currentA;
// };
