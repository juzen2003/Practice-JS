/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// k: number of lists
// n: average size of each list
// total data size in the lists: kn

// Time: O(kn * logk)  --> partition the list into half at every level O(logk) * merge each list one by one O(kn)
// Space: O(1)
var mergeKLists = function(lists) {
  return partitionAndMerge(lists, 0, lists.length-1);
};

const partitionAndMerge = function(lists, start, end) {
  if(start > end) return null;
  if(start === end) return lists[start];

  let mid = parseInt((start + end) / 2);
  let l1 = partitionAndMerge(lists, start, mid);
  let l2 = partitionAndMerge(lists, mid+1, end);

  return merge(l1, l2);
};

// Time: O(kn)
const merge = function(l1, l2) {
  if(!l1) return l2;
  if(!l2) return l1;

  if(l1.val > l2.val) {
    l2.next = merge(l1, l2.next);
    return l2;
  } else {
    l1.next = merge(l1.next, l2);
    return l1;
  }
};

// Time: O(kn * k)  --> loop through lists & merge each list one by one, but previous list would get merge and visited one more time: n * (1 + 2 + ... + k) => n * (1 + k) * k / 2 => O(kn * k)
// Space: O(kn), create tmp which is the size of kn
var mergeKLists = function(lists) {
  let tmp = null;
  for(let i = 0; i < lists.length; i++) {
    tmp = merge(tmp, lists[i]);
  }

  return tmp;
};

const merge = function(l1, l2) {
  if(!l1) return l2;
  if(!l2) return l1;

  if(l1.val > l2.val) {
    l2.next = merge(l1, l2.next);
    return l2;
  } else {
    l1.next = merge(l1.next, l2);
    return l1;
  }
};
