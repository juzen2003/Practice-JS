/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// DFS,
// an ascending arr of a BST is actually the output of inorder traversal: left, root, right
// convert an ascending array into a height-balanced BST
// If it's a height balanced BST, the middle point (mid) would be the root of each section of inorder traversal
// a height-balanced binary tree: a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
//
var sortedArrayToBST = function(nums) {
  let bst = build(nums, 0, nums.length-1);
  return bst;
};

const build = function(arr, low, high) {
  if(low > high) return null;

  let mid = parseInt((low + high)/2);
  let root = new TreeNode(arr[mid]);
  root.left = build(arr, low, mid-1);
  root.right = build(arr, mid+1, high);

  return root;
};
