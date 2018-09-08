/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */

// at most k transactions
// dp[k][i]: store the profit until idx i with k transaction
// dp[k][i] = Math.max(dp[k][i-1], prices[i] - prices[j] + dp[k-1][j-1]), where j = 0 ~ i-1
// Time: O(kn)
// Space: O(kn)

var maxProfit = function(k, prices) {
  let days = prices.length;
  if(days === 0) return 0;

  // we need this part to get rid to TLE or MLE
  if(k >= parseInt(days/2)) {
    let profit = 0;
    for(let i = 1; i < days; i++) {
      if(prices[i] > prices[i-1]) {
        profit += prices[i] - prices[i-1];
      }
    }

    return profit;
  }

  let dp = [...Array(k+1)].map(el => Array(days).fill(0));

  for(let kk = 1; kk <= k; kk++) {
    let minCost = prices[0];
    for(let i = 1; i < days; i++) {
      minCost = Math.min(minCost, prices[i] - dp[kk-1][i-1]);
      dp[kk][i] = Math.max(dp[kk][i-1], prices[i] - minCost);
    }
  }

  return dp[k][days-1];
};
