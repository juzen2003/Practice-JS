/**
 * @param {number[][]} triangle
 * @return {number}
 */
// dp: an array store sum for different path at idx i in dp[i]
// initialize it with last layer

// Time: O(n^2 / 2) => O(n^2)
// Space: O(n), n: numbers of row
var minimumTotal = function(triangle) {
  let m = triangle.length;
  let dp = triangle[m-1];

  for(let layer = m-2; layer >= 0; layer--) {
    for(let i = 0; i <= layer; i++) {
      dp[i] = Math.min(dp[i], dp[i+1]) + triangle[layer][i];
    }
  }

  return dp[0];
};
