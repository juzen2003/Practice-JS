/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 3 operations allowed:
// Insert a character
// Delete a character
// Replace a character
//
// dp: a 2D array to store min steps to convert from first i character in word1 to first j character in word2:
// from word1.slice(0, i) (idx: up to i-1, first i characters)
// to word2.slice(0, j) (idx: up to j-1, first j characters) in dp[i][j]
// Time: O(n * m)
var minDistance = function(word1, word2) {
  let m = word1.length;
  let n = word2.length;

  let dp = [...Array(m+1)].map(el => Array(n+1).fill(0));

  // word2 empty, steps to convert word1 to empty
  for(let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }

  // word1 empty, steps to convert word2 to empty
  for(let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }

  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if(word1[i-1] === word2[j-1]) {
        dp[i][j] = dp[i-1][j-1];
      } else {
        // replace: dp[i-1][j-1] + 1
        // get the min steps to conver from first i-1 in word1 to first j-1 in word2, and plus 1 operation (replace) to get the min steps to conver from first i in word1 to first j in word2
        // insert: dp[i][j-1] + 1
        // get the min steps to convert from first i in word1 to first j-1 in word2, and plus 1 operation (insert) to get min steps to convert from first i in word1 to first j in word2
        // delete: dp[i-1][j] + 1
        // get the min steps to convert from first i-1 in word1 to first j in word2, and plus 1 operation (delete) to get min steps to convert from first i in word1 to first j in word2
        dp[i][j] = 1 + Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]);
      }
    }
  }

  return dp[m][n];
};
