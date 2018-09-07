/**
 * @param {number[]} nums
 * @return {number}
 */
// local max & min to store the continuing subarray product ends at current nums[i]
// max: current max product
// min: current min product

// if current nums[i] is negative, we swap max & min because:
// smaller number * negative value is larger than large number * negative value
// local max would be current nums[i] or nums[i] * prev max
// local min would be current nums[i] or nums[i] * prev min
// keeping updating finalMax

var maxProduct = function(nums) {
  let max = nums[0];
  let min = nums[0];
  let finalMax = nums[0];

  for(let i = 1; i < nums.length; i++) {
    if(nums[i] < 0) {
      [max, min] = [min, max];
    }

    max = Math.max(max * nums[i], nums[i]);
    min = Math.min(min * nums[i], nums[i]);
    finalMax = Math.max(finalMax, max);
  }

  return finalMax;
};
