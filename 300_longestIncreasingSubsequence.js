/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n^2)
var lengthOfLIS = function(nums) {
  if(nums.length === 0) return 0;

  let res = 1;
  let dp = new Array(nums.length).fill(1);

  for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    res = Math.max(res, dp[i]);
  }

  return res;
};
