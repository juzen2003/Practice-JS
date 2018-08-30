/**
 * @param {number[]} nums
 * @return {number}
 */
// length of nums: n + 1 and each el is between 1 to n, there must be one duplicated num
// Assume that there is only one duplicate number, find the duplicate one. (but it could be repeated more than once.)
// Time: O(logn)
// Space: O(1)
var findDuplicate = function(nums) {
  // possible values for each el, 1 to n
  let low = 1;
  let high = nums.length - 1; // n

  while(low <= high) {
    let count = 0;
    let mid = parseInt((low + high)/2);

    for(let i = 0; i < nums.length; i++) {
      if(nums[i] <= mid) {
        count++;
      }
    }

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
