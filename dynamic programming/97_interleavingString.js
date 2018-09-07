/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// dp: a 2D array to store boolean
// check weither s1.slice(0, i) & s2.slice(0, j) are interleaving to form s3.slice(0, i+j) in dp[i][j]
// 1. s2 empty, if previous s1 character is interleaving && current s1 character match current s3 character => interleaving
// 2. s1 empty, if previous s2 character is interleaving && current s2 character match current s3 character => interleaving
// 3. when both s1 and s2 is not empty, then if we arrive (i, j) from (i-1, j), then if (i-1,j) is already interleaving and i at s1 and current s3 position equal, it's interleaving. If we arrive (i,j) from (i, j-1), then if (i, j-1) is already interleaving and j at s2 and current s3 position equal. it is interleaving.
var isInterleave = function(s1, s2, s3) {
  let m = s1.length;
  let n = s2.length;
  if(m+n !== s3.length) return false;

  let dp = [...Array(m+1)].map(el => Array(n+1).fill(false));
  dp[0][0] = true;

  // s2 empty
  for(let i = 1; i <= m; i++) {
    dp[i][0] = dp[i-1][0] && (s1[i-1] === s3[i-1]);
  }

  // s1 empty
  for(let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j-1] && (s2[j-1] === s3[j-1]);
  }

  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      dp[i][j] = dp[i-1][j] && (s1[i-1] === s3[i+j-1]) || dp[i][j-1] && (s2[j-1] === s3[i+j-1]);
    }
  }

  return dp[m][n];
};
