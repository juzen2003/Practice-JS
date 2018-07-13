/**
 * @param {number[]} nums
 * @return {number}
 */
 // elements might be duplicated
var findMin = function(nums) {
  let low = 0;
  let high = nums.length - 1;

  while(low <= high) {
    if(nums[low] < nums[high]) return nums[low];

    let mid = parseInt((low + high) / 2);

    if(nums[low] === nums[high]) {
      high--;
    } else if(nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    } else if(nums[mid] < nums[mid - 1]) {
      return nums[mid];
    } else if(nums[mid] > nums[high]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return nums[low];
};
