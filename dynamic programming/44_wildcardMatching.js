/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
//
// dp: a 2D array to store the matching result of:
// s.slice(0, i) (idx: 0 up to i-1) & p.slice(0, j) (idx: 0 up to j-1) in dp[i][j]
// s.slice(0, i+1) (idx: 0 up to i) & p.slice(0, j+1) (idx: 0 up to j) in dp[i+1][j+1]
// initialize dp[0][0] = true when there is nothing to check
var isMatch = function(s, p) {
  let dp = [...Array(s.length+1)].map(el => Array(p.length+1).fill(false));
  dp[0][0] = true;

  for(let j = 0; j < p.length; j++) {
    if(p[j] === "*" && dp[0][j]) {
      dp[0][j+1] = true;
    }
  }

  for(let i = 0; i < s.length; i++) {
    for(let j = 0; j < p.length; j++) {
      if(p[j] === s[i] || p[j] === "?") {
        dp[i+1][j+1] = dp[i][j];
      } else if(p[j] === "*") {
        // dp[i+1][j]: * match empty character
        // dp[i][j+1]: * match at least one character (previous one)
        dp[i+1][j+1] = dp[i+1][j] || dp[i][j+1];
      }
    }
  }

  return dp[s.length][p.length];
};
