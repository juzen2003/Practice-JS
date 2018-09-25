/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Time: O(n)
// Space: O(n)
var containsDuplicate = function(nums) {
  let exist = new Set();
  for(let i = 0; i < nums.length; i++) {
    if(!exist.has(nums[i])) {
      exist.add(nums[i]);
    } else {
      return true;
    }
  }

  return false;
};
