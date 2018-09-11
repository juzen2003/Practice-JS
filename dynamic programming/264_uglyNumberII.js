/**
 * @param {number} n
 * @return {number}
 */

// dp: array to store first n ugly number in dp[n]
// dp[0] = 1

// k[1] = min( k[0]x2, k[0]x3, k[0]x5). The answer is k[0]x2. So we move 2's pointer to 1. Then we test:
// k[2] = min( k[1]x2, k[0]x3, k[0]x5). And so on. Be careful about the cases such as 6, in which we need to forward both pointers of 2 and 3.
// x here is multiplication.

// 1. Essentially, we have to multiply the existed ugly numbers by 2, 3 and 5 to get a bigger ugly number, however, if we blindly multiply all the existed numbers by 2, 3 and 5, then the number could grow much faster than needed
// 2. Hence, every time we only try to find the next smallest ugly number
// 3. Also, since any existed number will be multiplied by 2, 3 and 5 once and only once, otherwise duplicate, we can use a pointer to keep track of where the 2, 3 and 5 are going to multiply in the next step.
// 4. Once, we find the next minimum, we can move on the corresponding pointer, otherwise it always stays at the already existed ugly number which would makes pointer useless

var nthUglyNumber = function(n) {
  let dp = [...Array(n)];
  dp[0] = 1;
  let [p2, p3, p5] = [0, 0, 0];

  for(let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
    if(dp[i] === dp[p2] * 2) p2++;
    if(dp[i] === dp[p3] * 3) p3++;
    if(dp[i] === dp[p5] * 5) p5++;
  }

  return dp[n-1];
};
