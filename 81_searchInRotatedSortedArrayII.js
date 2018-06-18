// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).
//
// You are given a target value to search. If found in the array return true, otherwise return false.
//
// Example 1:
//
// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
// Example 2:
//
// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false
// Follow up:
//
// This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
// Would this affect the run-time complexity? How and why?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  if(nums.length === 0) return false;

  let low = 0;
  let high = nums.length - 1;

  while(low < high) {
    let mid = low + Math.floor((high-low) / 2);
    if(nums[mid] === target) return true;

    // this would deal with case where repeated value at both low & high end, left side is not sorted
    if(nums[low] === nums[high]) {
      low += 1;
    } else if(nums[mid] >= nums[low]){
      // left side still sorted
      if(nums[mid] > target && target >= nums[low]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      // right side sorted
      if(nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  if(nums[low] !== target) {
    return false;
  } else {
    return true;
  }
};
