/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let length = 1;
  // head points to the first node
  let start = head;
  while(start.next !== null) {
    start = start.next;
    length++;
  }

  if(length === 1 && n === 1) {
      return [];
  }

  start = head;
  let nthNode = length - n;
  if(nthNode === 0) {
    head = start.next;
    return head;
  } else {
    let i = 1;
    while(i !== nthNode) {
      start = start.next;
      i++;
    }
    // console.log(i);
    // console.log(start.val)

    let removeNode = start.next;
    start.next = removeNode.next;

    return head;
  }
};
