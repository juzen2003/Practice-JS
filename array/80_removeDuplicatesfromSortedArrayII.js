/**
 * @param {number[]} nums
 * @return {number}
 */
// Use same trick from 26 with a tracker to make sure duplicated el are store only twice
var removeDuplicates = function(nums) {
  let count = 1;
  let dup = false;

  for(let i = 1; i < nums.length; i++) {
    if(nums[i] !== nums[i-1]) {
      nums[count] = nums[i];
      count++;
      dup = false;

    } else if(!dup) { // nums[i] === nums[i-1]
      nums[count] = nums[i];
      count++;
      dup = true;
    }
  }

  return count;
};
