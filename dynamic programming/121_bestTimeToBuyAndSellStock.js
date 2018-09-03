/**
 * @param {number[]} prices
 * @return {number}
 */
// dp: an array to store the profit at day i (ith element in prices, idx i - 1) in dp[i-1]
var maxProfit = function(prices) {
  let days = prices.length;
  let dp = new Array(days).fill(0);
  let max = 0;

  for(let i = 1; i < days; i++) {
    dp[i] = Math.max(prices[i] - prices[i-1], dp[i-1] + prices[i] - prices[i-1]);
    max = Math.max(max, dp[i]);
  }

  return max;
};
