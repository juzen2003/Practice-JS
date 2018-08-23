/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// 1..n increasing values in inorder for BST
// if we pick i as root, then 1..i-1 would be left subtree & i+1..n would be right subtree
var generateTrees = function(n) {
  if(!n) return [];
  // use 2D matrix dp to store the previous calculated result for better performance
  // dp: store all possible tree from start to end in dp[start][end]
  let dp = [...new Array(n+1)].map(el => new Array(n+1));
  let res = genTree(1, n, dp);
  return res;
};

// generate all possible trees with value from start to end
const genTree = function(start, end, dp) {
  if(start > end) return [null];
  // if(start === end) return [new TreeNode(start)];
  if(dp[start][end]) return dp[start][end];

  let res = [];
  for(let i = start; i <= end; i++) {
    let left = genTree(start, i-1, dp);
    let right = genTree(i+1, end, dp);

    for(let l of left) {
      for(let r of right) {
        let root = new TreeNode(i);
        root.left = l;
        root.right = r;
        res.push(root);
      }
    }
  }
  dp[start][end] = res;
  return res;
};
