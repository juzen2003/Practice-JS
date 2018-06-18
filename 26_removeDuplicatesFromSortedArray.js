/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let count = 1;
  let tracker = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== nums[tracker]) {
      count += 1;
      tracker += 1;
      [nums[i], nums[tracker]] = [nums[tracker], nums[i]];
    }
  }

  return count;
};
