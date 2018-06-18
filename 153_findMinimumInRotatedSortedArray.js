/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let low = 0;
  let high = nums.length - 1;

  while(low < high) {
    // put this check to avoid unecessary operations
    if(nums[low] < nums[high]) return nums[low];

    let mid = low + Math.floor((high - low) / 2);
    if(nums[mid] > nums[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return nums[low];
};
