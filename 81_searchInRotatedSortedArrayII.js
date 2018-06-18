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
