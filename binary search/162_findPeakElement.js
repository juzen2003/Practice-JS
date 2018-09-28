/**
 * @param {number[]} nums
 * @return {number}
*/
// Time: O(log n)
var findPeakElement = function(nums) {
  let low = 0;
  let high = nums.length - 1;

  while(low <= high) {
    let mid = parseInt((low + high) / 2);

    // find the last point (mid) where this condition met, and return low (mid + 1)
    if(nums[mid] < nums[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
};
