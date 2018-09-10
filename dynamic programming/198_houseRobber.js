/**
 * @param {number[]} nums
 * @return {number}
 */
// dp: a array to store the max profit until idx i at dp[i]
// Time: O(n)
// Space: O(n), dp
var rob = function(nums) {
  let len = nums.length;
  if(len === 0) return 0;

  let dp = [...Array(len)].fill(0);
  for(let i = 0; i < len; i++) {
    if(i === 0) {
      dp[i] = nums[0];
    } else {
      let prevMax = (i-2) >= 0 ? dp[i-2] : 0;
      dp[i] = Math.max(dp[i-1], nums[i] + prevMax);
    }
  }

  return dp[len-1];
};
