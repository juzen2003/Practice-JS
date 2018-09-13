/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Time: O(n)
var canJump = function(nums) {
  if(nums.length === 1) return true;
  let currentEnd = 0;
  let currentFarthest = 0;

  for(let i = 0; i < nums.length-1; i++) {
    currentFarthest = Math.max(currentFarthest, i + nums[i]);
    if(i === currentEnd) {
      currentEnd = currentFarthest;
      if(currentEnd >= nums.length-1) return true;
    }
  }

  return false;
};
