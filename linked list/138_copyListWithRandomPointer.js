/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
// Make sure different nodes with the same values are copied differently;
// Nodes might have the same label, so we use node as key in map instead of node.label
var copyRandomList = function(head) {
  if(!head) return null;
  let map = new Map();
  let current = head;

  while(current) {
    map.set(current, new RandomListNode(current.label));
    current = current.next;
  }

  current = head;

  while(current) {
    if(current.next) {
      map.get(current).next = map.get(current.next);
    }

    if(current.random) {
      map.get(current).random = map.get(current.random);
    }

    current = current.next;
  }

  return map.get(head);
};
