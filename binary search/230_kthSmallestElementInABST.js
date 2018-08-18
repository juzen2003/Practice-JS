/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 // Kth smallest in BST
var kthSmallest = function(root, k) {
  let count = countNodes(root.left);

  if(count + 1 === k) {
    return root.val;
  } else if(count + 1 > k) {
    return kthSmallest(root.left, k);
  } else if (count + 1 < k) {
    return kthSmallest(root.right, k - count - 1);
  }
};

const countNodes = function(root) {
  if(root === null) return 0;

  return 1 + countNodes(root.left) + countNodes(root.right);
};


// do preorder in BST, count up to k to find the kth smallest
// output of preorder would be increasing
// var kthSmallest = function(root, k) {
//   let count = 0;
//   let stack = [];
//
//   while(root || stack.length) {
//     while(root) {
//       stack.push(root);
//       root = root.left;
//     }
//
//     let currentNode = stack.pop();
//     count++;
//     if(count === k) {
//       return currentNode.val;
//     }
//     root = currentNode.right;
//   }
// };
