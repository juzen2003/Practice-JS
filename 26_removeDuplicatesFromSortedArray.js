// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let count = 1;
  let tracker = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== nums[tracker]) {
      count += 1;
      tracker += 1;
      [nums[i], nums[tracker]] = [nums[tracker], nums[i]];
    }
  }

  return count;
};
