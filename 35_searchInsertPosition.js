/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] >= target) {
        return i;
    }

  }
  // if nothing is larger than target, put it at the last
  return nums.length;
};
