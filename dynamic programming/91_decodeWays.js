/**
 * @param {string} s
 * @return {number}
 */
// dp: an array to store number of ways to decode when string length is i in dp[i+1]

// 1. prev & current are all 0 OR prev > 2 and current = 0: no way to decode
// => in these case, we return 0
// 2. prev = 0 and current is between 1 to 9 OR prev * 10 + current > 26: can only have 1 way to decode prev + current (in string)
// => in these case, we use dp[i] to update dp[i+1]
// 3. prev <= 2 and current = 0: can only have 1 way to decode prev + current (in string)
// => in this case, we use dp[i-1] to update dp[i+1]
// 4. prev * 10 + current <= 26: have 2 ways to decode prev + current (in string)
// => in this case, we use dp[i-1] + dp[i] to update dp[i+1]
var numDecodings = function(s) {
  let m = s.length;
  if(m === 0) return 0;

  let dp = [...Array(m+1)].fill(0);
  dp[0] = 1; // 1 way to decode empty string
  dp[1] = 1;
  if(s[0] === "0") return 0;

  for(let i = 1; i < m; i++) {
    let prev = parseInt(s[i-1]);
    let current = parseInt(s[i]);

    if(current === 0 && prev === 0 || current === 0 && prev > 2) {
      return 0;
    } else if(prev === 0 || prev * 10 + current > 26) {
      dp[i+1] = dp[i] + 1;
    } else if(current === 0) {
      // current === 0 && prev <= 2
      dp[i+1] = dp[i-1];
    } else {
      // prev * 10 + current <= 26
      dp[i+1] = dp[i] + dp[i-1];
    }
  }

  return dp[m];
};
