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
// space: O(1) 
var swapPairs = function(head) {
    let dummyHead = new ListNode(null);
    dummyHead.next = head;
    let current = dummyHead;



    while(current.next && current.next.next) {
        let first = current.next;
        let second = current.next.next;

        first.next = second.next;
        current.next = second;
        second.next = first;
        current = current.next.next;
    }

    return dummyHead.next;
};
