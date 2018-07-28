/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  let bTree = build(0, 0, inorder.length-1, preorder, inorder);
  return bTree;
};

// preStart = idx at preorder to find the root
// inStart = start searching point for current root val in inorder
// inEnd = end searching point for current root val in inorder
const build = function(preStart, inStart, inEnd, preorder, inorder) {
  if(preStart > preorder.length-1 || inStart > inEnd) return null;

  let rootVal = preorder[preStart];
  let rootIdx;

  for(let i = inStart; i <= inEnd; i++) {
    if(rootVal === inorder[i]) rootIdx = i;
  }

  let root = new TreeNode(rootVal);
  // left subtree: root.left start at current root's next idx (preStart + 1) at preorder, and we only need to loop from inStart to rootIdx - 1 at inorder to find it
  // right subtree: root.right start at current root's idx + all left nodes count (current root idx - inStart at inorder) + 1 at preorder, and we only loop from rootIdx + 1 to inEnd at inorder to find it
  root.left = build(preStart + 1, inStart, rootIdx - 1, preorder, inorder);
  root.right = build(preStart + rootIdx - inStart + 1, rootIdx + 1, inEnd, preorder, inorder);

  return root;
};
