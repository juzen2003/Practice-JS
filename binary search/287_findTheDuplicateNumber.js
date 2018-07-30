/**
 * @param {number[]} nums
 * @return {number}
 */
// length of nums: n + 1 and each el is between 1 to n, there must be on duplicate num
var findDuplicate = function(nums) {
  // possible values for each el, 1 to n
  let low = 1;
  let high = nums.length - 1;

  while(low <= high) {
    let count = 0;
    let mid = parseInt((low + high)/2);

    for(let i = 0; i < nums.length; i++) {
      if(nums[i] <= mid) {
        count++;
      }
    }

    // find the last value that el <=  to it (that last value) is not duplicated, return the value + 1
    // this means that value + 1 has duplicated el
    if(count <= mid) {
      // search for value range: mid + 1 to high
      low = mid + 1;
    } else {
      // search for value range: low to mid - 1
      high = mid - 1;
    }
  }

  return low;
};
