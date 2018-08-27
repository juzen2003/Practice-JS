/**
 * @param {number} n
 * @return {number}
 */
// can walk 1 or 2 steps
// dp: an array to store how many steps to reach to n in dp[n]
// Time: O(n)
var climbStairs = function(n) {
  let dp = [...Array(n+1)].fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for(let i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }

  return dp[n];
};
