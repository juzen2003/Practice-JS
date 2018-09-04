/**
 * @param {number[]} prices
 * @return {number}
 */
// dp: a 2D array to store max profit until (not at) ith day (idx i, starting from 0th day) with k transactions in dp[k][i]

// at most 2 transactions

// dp[k, i] = max(dp[k, i-1], prices[i] - prices[j] + dp[k-1, j-1]), j=[0..i-1]

// For k transactions, on i-th day,
// if we don't trade then the profit is same as previous day dp[k, i-1];
// and if we bought the share on j-th day where j=[0..i-1], then sell the share on i-th day then the profit is prices[i] - prices[j] + dp[k-1, j-1] .
// Actually j can be i as well. When j is i, the one more extra item prices[i] - prices[j] + dp[k-1, j] = dp[k-1, i] looks like we just lose one chance of transaction.

// I see someone else use the formula dp[k, i] = max(dp[k, i-1], prices[i] - prices[j] + dp[k-1, j]), where the last one is dp[k-1, j] instead of dp[k-1, j-1]. It's not the direct sense, as if the share was bought on j-th day, then the total profit of previous transactions should be done on (j-1)th day. However, the result based on that formula is also correct, because if the share was sold on j-th day and then bought again, it is the same if we didn't trade on that day.

// Time: O(kn)
// Space: O(kn)
var maxProfit = function(prices) {
  let days = prices.length;
  if(days === 0) return 0;

  let trans = 2;
  let dp = [...Array(trans+1)].map(el => Array(days).fill(0));

  for(let k = 1; k <= trans; k++) {
    let minCost = prices[0];
    for(let i = 1; i < days; i++) {
      minCost = Math.min(minCost, prices[i] - dp[k-1][i-1]);
      dp[k][i] = Math.max(dp[k][i-1], prices[i] - minCost);
    }
  }

  return dp[2][days-1];
};
