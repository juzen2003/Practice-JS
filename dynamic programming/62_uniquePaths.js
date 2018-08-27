/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// m: column
// n: row
// dp: an array to store number of unique paths at (m,n) at dp[m][n]
// Time: O(m * n)
var uniquePaths = function(m, n) {
  // dp[0][j] or dp[i][0] are all 0
  let dp = [...Array(m+1)].map(el => Array(n+1).fill(0));

  for(let i = 1; i < dp.length; i++) {
    for(let j = 1; j < dp[0].length; j++) {
      if(i === 1 && j === 1) {
        dp[i][j] = 1;
      } else {
        // unique path to (i, j) is equal to:
        // unique path to its left grid: (i-1, j) + unique path to its top grid: (i, j-1)
        dp[i][j] = dp[i-1][j] + dp[i][j-1];
      }
    }
  }

  return dp[m][n];
};
