/**
 * @param {number[][]} grid
 * @return {number}
 */
// grid[m-1][n-1]
// m: row
// n: column
// dp: an array to store min sum up to idx (m-1,n-1) at dp[m-1][n-1] (actual position idx at grid m-1, n-1)
// can only move either down or right
// Time: O(m * n)
var minPathSum = function(grid) {
  let m = grid.length;
  let n = grid[0].length;

  let dp = [...Array(m)].map(el => Array(n).fill(0));

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
      } else {
        let left = (i-1) >= 0 ? dp[i-1][j] : Number.MAX_SAFE_INTEGER;
        let top = (j-1) >= 0 ? dp[i][j-1] : Number.MAX_SAFE_INTEGER;
        dp[i][j] = grid[i][j] + Math.min(left, top);
      }
    }
  }

  return dp[m-1][n-1];
};
