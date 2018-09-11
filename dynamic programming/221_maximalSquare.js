/**
 * @param {character[][]} matrix
 * @return {number}
 */

// dp: a 2D array to store the max len of possible square at idx i, j in dp[i+1][j+1]
var maximalSquare = function(matrix) {
  let m = matrix.length;
  if(m === 0) return 0;
  let n = matrix[0].length;

  let dp = [...Array(m+1)].map(el => Array(n+1).fill(0));
  let maxLen = 0;

  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if(matrix[i-1][j-1] === "1") {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }

  return maxLen * maxLen;
};
