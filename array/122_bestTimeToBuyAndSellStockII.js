/**
 * @param {number[]} prices
 * @return {number}
 */
// You may complete as many transactions as you like
// Time: O(n)
var maxProfit = function(prices) {
  let max = 0;
  let days = prices.length;

  for(let i = 1; i < days; i++) {
    if(prices[i] > prices[i-1]) {
      max += prices[i] - prices[i-1];
    }
  }

  return max;
};
