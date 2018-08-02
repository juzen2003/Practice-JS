/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// DFS, postorder traversal to compare 
var isSameTree = function(p, q) {
  if(p === null || q === null) return p === q;

  let stackP = [];
  let stackQ = [];

  stackP.push(p);
  stackQ.push(q);

  while(stackP.length !== 0 && stackQ.length !== 0) {
    let currentP = stackP.pop();
    let currentQ = stackQ.pop();

    if(currentP.val !== currentQ.val) return false;

    if(currentP.right) stackP.push(currentP.right);
    if(currentQ.right) stackQ.push(currentQ.right);

    if(stackP.length !== stackQ.length) return false;

    if(currentP.left) stackP.push(currentP.left);
    if(currentQ.left) stackQ.push(currentQ.left);

    if(stackP.length !== stackQ.length) return false;
  }

  return true;
};

// recursion
// var isSameTree = function(p, q) {
//   if(p === null || q === null) return p === q;
//
//   if(p.val !== q.val) {
//     return false;
//   } else {
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
//   }
// };
