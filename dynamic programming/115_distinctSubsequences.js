/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

// dp: a 2D array to store number of unique subsequence of s.slice(0,i) & t.slice(0,j) in dp[i][j]
// 1. if length of s is less than the one of t, return 0
// 2. if length of t is 0, and s is not, the number of subsequence is 1
// 3. check if current character at s & t are the same:
// if the current character in S doesn't equal to current character T, then we have the same number of distinct subsequences as we had without the new character in S.
// if the current character in S equal to the current character T, then the distinct number of subsequences: the number we had before without current character at s + the distinct number of subsequences we had with less longer T and less longer S. (without current character at s & without current character at t)

// Time: O(m * n)
var numDistinct = function(s, t) {
  let m = s.length;
  let n = t.length;

  if(m < n) return 0;

  let dp = [...Array(m+1)].map(el => Array(n+1).fill(0));
  dp[0][0] = 1;

  // if length of t is 0, and s is not, the number of subsequence is 1
  for(let i = 1; i <= m; i++) {
    dp[i][0] = 1;
  }

  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if(s[i-1] === t[j-1]) {
        dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
      } else {
        dp[i][j] = dp[i-1][j];
      }
    }
  }

  return dp[m][n];
};
