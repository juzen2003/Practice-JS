/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// one pass, two pointers
// Space: O(1)
// Time: O(n)
var sortColors = function(nums) {
  let two = nums.length - 1;
  let zero = 0;
  for(let i = 0; i <= two; i++) {
    if(nums[i] === 0) {
      [nums[i], nums[zero]] = [nums[zero], nums[i]];
      zero++;
    } else if(nums[i] === 2) {
      [nums[i], nums[two]] = [nums[two], nums[i]];
      i--;
      two--;
    }
  }
};

// A rather straight forward solution is a two-pass algorithm using counting sort.
// First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
// two-pass
// Time: O(n)
// Space: O(m), m different values, in this case, 0, 1, 2
var sortColors = function(nums) {
  let num0 = 0;
  let num1 = 0;
  let num2 = 0;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) num0++;
    if(nums[i] === 1) num1++;
    if(nums[i] === 2) num2++;
  }

  for(let i = 0; i < num0; i++) nums[i] = 0;
  for(let i = 0; i < num1; i++) nums[num0 + i] = 1;
  for(let i = 0; i < num2; i++) nums[num0 + num1 + i] = 2;
};
