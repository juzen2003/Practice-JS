/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// obstacleGrid[m-1][n-1]
// m: row
// n: column
// dp: an array to store number of unique paths at (m,n) at dp[m][n] (actual position idx at obstacleGrid m-1, n-1)
// can only move either down or right
// Time: O(m * n)
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  let dp = [...Array(m+1)].map(el => Array(n+1).fill(0));

  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if(obstacleGrid[i-1][j-1] === 1) {
        dp[i][j] = 0;
        // continue;
      } else if(i === 1 && j === 1) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i-1][j] + dp[i][j-1];
      }
    }
  }

  return dp[m][n];
};
