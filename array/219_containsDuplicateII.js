/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
// remove the el from set if idx different is larger than k
// Time: O(n)
// Space: O(n)
var containsNearbyDuplicate = function(nums, k) {
  let exist = new Set();
  for(let i = 0; i < nums.length; i++) {
    if(i > k) {
      exist.delete(nums[i-k-1]);
    }

    if(!exist.has(nums[i])) {
      exist.add(nums[i]);
    } else {
      return true;
    }
  }

  return false;
};
