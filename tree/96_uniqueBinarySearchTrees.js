/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  if(!n) return 0;
  // use 2D matrix dp to store the previous calculated result; otherwise memory limited error
  // dp: store tree count from start to end in dp[start][end]
  let dp = [...new Array(n+1)].map(el => new Array(n+1));
  let count = genTreeCount(1, n, dp);
  return count;
};

// generate number of trees from start to end
const genTreeCount = function(start, end, dp) {
  if(start > end) return 0;
  // if(start === end) return 1;
  if(dp[start][end]) return dp[start][end];
  let count = 0;

  for(let i = start; i <= end; i++) {
    let left = genTreeCount(start, i-1, dp);
    let right = genTreeCount(i+1, end, dp);

    if(!left && !right) {
      count += 1;
    } else if(!left || !right) {
      count += (left + right);
    } else {
      count += (left * right);
    }
  }

  dp[start][end] = count;
  return count;
};
