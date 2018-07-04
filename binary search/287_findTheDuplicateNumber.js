/**
 * @param {number[]} nums
 * @return {number}
 */
// length of nums: n + 1 and each el is between 1 to n, there must be on duplicate num
var findDuplicate = function(nums) {
  // possible values for each el
  let low = 1;
  let high = nums.length - 1;

  while(low < high) {
    let count = 0;
    let mid = parseInt((low + high)/2);

    for(let i = 0; i < nums.length; i++) {
      if(nums[i] <= mid) {
        count++;
      }
    }

    if(count <= mid) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};
