/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
//
// s could be empty and contains only lowercase letters a-z.
// p could be empty and contains only lowercase letters a-z, and characters like . or *.
//
// dp: a 2D array to store the matching result (boolean) of:
// s.slice(0, i) (idx: 0 up to i-1) & p.slice(0, j) (idx: 0 up to j-1) in dp[i][j]
// s.slice(0, i+1) (idx: 0 up to i) & p.slice(0, j+1) (idx: 0 up to j) in dp[i+1][j+1]
// initialize dp[0][0] = true when there is nothing to check
var isMatch = function(s, p) {
  let dp = [...Array(s.length+1)].map(el => Array(p.length+1).fill(false));
  dp[0][0] = true;
  // if s = "", p is sth like "s*" or "a*x*b*..", set it to true
  for(let j = 0; j < p.length; j++) {
    if(p[j] === "*" && dp[0][j-1]) {
      dp[0][j+1] = true;
    }
  }

  for(let i = 0; i < s.length; i++) {
    for(let j = 0; j < p.length; j++) {

      if(p[j] === s[i]) {
        dp[i+1][j+1] = dp[i][j];
      } else if(p[j] === ".") {
        dp[i+1][j+1] = dp[i][j];
      } else if(p[j] === "*") {
        if(p[j-1] === s[i] || p[j-1] === ".") {
          // dp[i+1][j-1] => p[j-1] + p[j] = "x*" match nothing (check if p at j-2 & s at i: true)
          // dp[i+1][j] => p[j-1] + p[j] = "x*" match just one x character (check if p at j-1 & s at i: true)
          // dp[i][j+1] => p[j-1] + p[j] = "x*" match multiple x characters (check if p at j & s at i-1: true)
          dp[i+1][j+1] = dp[i+1][j-1] || dp[i+1][j] || dp[i][j+1];
        } else {
          // p[j-1] !== s[i] && p[j-1] !== "."
          // dp[i+1][j-1] => p[j-1] + p[j] = "x*" match nothing (check if p at j-2 & s at i: true)
          dp[i+1][j+1] = dp[i+1][j-1];
        }
      }
    }
  }

  return dp[s.length][p.length];
};
