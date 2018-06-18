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
      // we can use mid + 1 because we know last element is smaller than mid
      low = mid + 1;
    } else {
      // we use mid since it could  still be the smallest one
      high = mid;
    }
  }

  return nums[low];
};
