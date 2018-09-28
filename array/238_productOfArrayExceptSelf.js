/**
 * @param {number[]} nums
 * @return {number[]}
 */
// output array doesn't count as extra space in space complexity analysis
// Time: O(n)
// Space: O(1)
// iterate array twice
// 1. iterate from front to store the product of all el up to idx - 1 (including idx - 1) in res[idx]
// 2. iterate from the back to time el from back (from idx + 1 to end) to res[idx]
var productExceptSelf = function(nums) {
  let n = nums.length;
  let res = [];
  let front = 1;
  for(let i = 0 ; i < n; i++) {
    res[i] = front;
    front *= nums[i];
  }

  let back = 1;
  for(let i = n-1; i >= 0; i--) {
    res[i] *= back;
    back *= nums[i];
  }

  return res;
};
