/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// no duplicated element in nums
// find the 1st point in nums where the value is >= target, return that point
// or find the last point in nums where the value is < target, return that point + 1
var searchInsert = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while(low <= high) {
    let mid = parseInt((low + high) / 2);

    if(nums[mid] >= target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};
