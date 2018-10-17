/**
 * @param {number[]} nums
 * @return {number}
 */
// Use same trick from 26 with a tracker to make sure duplicated el are store only twice
// Time: O(n)
// space: O(1)
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
      dup = true; // set this to true to avoid storing more than twice for same el
    }
  }

  return count;
};
