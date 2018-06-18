/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let low = 0;
  let high = nums.length - 1;

  while(low < high) {
    if(nums[low] < nums[high]) return nums[low];

    let mid = Math.floor((low + high) / 2);

    // remove the repeated value if they happened to be at both low and high
    if(nums[low] === nums[high]) {
      high -= 1;
    } else if(nums[mid] > nums[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return nums[low];
};
