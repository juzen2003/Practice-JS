/**
 * @param {number[]} nums
 * @return {number}
 */
// modify nums in place, and we return the length of unique el in nums
// it would print out the number (we return) of elements in nums
// Time: O(n)
// space: O(1)
var removeDuplicates = function(nums) {
  let count = 1;
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] !== nums[i-1]) {
      nums[count] = nums[i];
      count++;
    }
  }

  return count;
};
