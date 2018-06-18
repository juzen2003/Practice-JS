/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let tracker = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== val) {
      [nums[i], nums[tracker]] = [nums[tracker], nums[i]];
      tracker++;
    }
  }

  return tracker;
};
