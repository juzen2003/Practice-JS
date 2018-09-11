/**
 * @param {number[]} nums
 * @return {number}
 */
// houses are arranged in a circle
// can treat it as house robber question from 198
// n = nums.length
// 1. rob from idx: 0 to n-2
// 2. rob from idx: 1 to n-1
// 3. get the max from above

// Time: O(n)
// Space: O(n)
var rob = function(nums) {
  let n = nums.length;
  if(n === 0) return 0;
  if(n === 1) return nums[0];
  return Math.max(robHouse(nums, 0, n-2), robHouse(nums, 1, n-1));
};

// use the regular linear rob house function to help out
const robHouse = function(nums, low, high) {
  let n = high - low + 1;
  let dp = [...Array(n)].fill(0);

  for(let i = low; i <= high; i++) {
    if(i === low) {
      dp[i] = nums[low];
    } else {
      let prevMax = (i-2) >= 0 ? dp[i-2] : 0;
      dp[i] = Math.max(dp[i-1], nums[i] + prevMax);
    }
  }

  return dp[high];
};
