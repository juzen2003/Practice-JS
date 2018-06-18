/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let low = 0;
  let high = nums.length-1;

  while(low < high) {
    let mid = Math.floor((low + high) / 2);

    if(nums[mid] === target) return mid;

    // left side sorted
    if(nums[low] <= nums[mid]) {
      if(target >= nums[low] && target < nums[mid]) {
          high = mid - 1;
      } else {
          low = mid + 1;
      }
    } else {
      // right side sorted
      if(target <= nums[high] && target > nums[mid]) {
          low = mid + 1;
      } else {
          high = mid - 1;
      }
    }
  }

  if(nums[low] !== target) {
    return -1;
  } else {
    return low;
  }
};
