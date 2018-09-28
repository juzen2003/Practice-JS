/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// elements are not duplicated
// Time: O(log n)
var search = function(nums, target) {
  if(nums.length === 0) return -1;

  let low = 0;
  let high = nums.length - 1;

  while(low <= high) {
    let mid = parseInt((low + high) / 2);

    if(nums[mid] === target) return mid;

    if(nums[mid] < nums[low]) {
      // left side not sorted, right side is sorted
      // search right if target is at right
      // else search left
      if(target <= nums[high] && target > nums[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      // left side is sorted
      // search left if target is at left
      // else search right
      if(target >= nums[low] && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1;
};
