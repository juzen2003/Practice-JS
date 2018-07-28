/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// postorder = left, right, root
// inorder = left, root, right
var buildTree = function(inorder, postorder) {
  let bTree = build(postorder.length-1, 0, inorder.length-1, postorder, inorder);
  return bTree;
};

// postStart = idx at postorder to find the root
// inStart = start searching point for current root val in inorder
// inEnd = end searching point for current root val in inorder
const build = function(postStart, inStart, inEnd, postorder, inorder) {
  if(postStart < 0 || inStart > inEnd) return null;

  let rootVal = postorder[postStart];
  let rootIdx;

  for(let i = inStart; i <= inEnd; i++) {
    if(rootVal === inorder[i]) rootIdx = i;
  }

  let root = new TreeNode(rootVal);
  // left subtree: root.left (root of left subtree) start at current root's idx - all right nodes count (inEnd - current root idx at inorder) - 1 at postorder, and we only need to loop from inStart to rootIdx - 1 at inorder to find it
  // right subtree: root.right (root of right subtree) start at current root's previous idx (postStart - 1) at postorder, and we only loop from rootIdx + 1 to inEnd at inorder to find it
  root.left = build(postStart - (inEnd - rootIdx) - 1, inStart, rootIdx - 1, postorder, inorder);
  root.right = build(postStart - 1, rootIdx + 1, inEnd, postorder, inorder);

  return root;
};
