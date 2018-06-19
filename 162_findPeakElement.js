/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if(nums.length === 1) return 0;

  let low = 0;
  let high = nums.length-1;

  // we use low + 1 < high instead of low < high
  // because we need to use [low,high] to figure out the peak
  // otherwise we can't tell if we should compare to low - 1 or low + 1
  while((low + 1) < high) {
    let mid = Math.floor((high + low) / 2);

    // right part has a peak
    if(nums[mid] < nums[mid + 1]) {
      low = mid + 1;
    } else {
    // left part has a peak
      high = mid;
    }
  }

  // when exit out while loop, [low, high]
  if(nums[low] > nums[high]) {
    return low;
  } else {
    return high;
  }
};
