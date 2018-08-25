/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

1   2   4           |
 \ /   / \          v
  3   5   8         v
   \ / \   \
    6   7   9

Write a function that, for two given individuals in our dataset, returns true if and only if they share at least one ancestor.

Sample input and output:
parentChildPairs, 3, 8 => false
parentChildPairs, 5, 8 => true
parentChildPairs, 6, 8 => true
*/
var parentChildPairs =
    [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7],
     [4, 5], [4, 8], [8, 9]];

// check 1st node:
  // loop through every el in the pair, including, get parent of this node, put them in  res array
// check 2nd node:
  // compare the parents of 2nd node, and see if it's in res

// Time: O(n) * 4
// Space: O(n) + O(n) ==> O(n)
const findAncestor = function(arr, node1, node2) {
  let res = [];
  let res2 = [];

  for(let i = 0; i < arr.length; i++) {
    let parent = arr[i][0];
    let child = arr[i][1];
    if(child === node1) {
      res.push(parent);
    }
  }

  for(let i = 0; i < arr.length; i++) {
    let parent = arr[i][0];
    let child = arr[i][1];
    if(res.includes(child) && !res.includes(parent)) {
      res.push(parent);
    }
  }
  console.log(res);

  for(let i = 0; i < arr.length; i++) {
    let parent = arr[i][0];
    let child = arr[i][1];
    if(child === node2) {
      res2.push(parent);
      // return true;
    }
  }

  for(let i = 0; i < arr.length; i++) {
    let parent = arr[i][0];
    let child = arr[i][1];
    if(res2.includes(child) && res.includes(parent)) {
      res2.push(parent);
      console.log(res2);
      return true;
    }
  }

  return false;
};

console.log(findAncestor(parentChildPairs, 1, 6));
/*
console.log(findAncestor(parentChildPairs, 5, 8));
console.log(findAncestor(parentChildPairs, 6, 8));
*/
