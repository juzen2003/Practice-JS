/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. put each positive number at the right place, like: 1 at nums[0], 2 at nums[1], etc
// 2. if we found the first number at idx i: nums[i] !== i+1, then i+1 is the first (smallest) missing positive number
// 3. if all numbers in nums exists, then the first missing positive number is nums.length + 1
// Time: O(n)
// Space: O(1)
var firstMissingPositive = function(nums) {
  let n = nums.length;

  for(let i = 0; i < n; i++) {
    while(nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }

  for(let i = 0; i < n; i++) {
    if(nums[i] !== i+1) return i+1;
  }

  return n+1;
};
