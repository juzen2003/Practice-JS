// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
//
// Example:
//
// Given array nums = [-1, 2, 1, -4], and target = 1.
//
// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

  nums = nums.sort((a,b) => a - b);
  let diff = 0;
//     track the sum closest to target
  let tracker;

  for(let i = 0; i < nums.length-2; i++) {
    for(let j = i+1, k = nums.length-1; j < k;) {
      let sum = nums[i] + nums[j] + nums[k];

      if(sum === target) {
          return sum;
      } else if( sum > target) {
        diff = sum - target;
        if(typeof tracker === "undefined") {
            tracker = sum;
        } else if (Math.abs(tracker - target) > diff) {
          tracker = sum;
        }
        k--;

        while(nums[k+1] === nums[k]) {
          k--;
        }

      } else if (sum < target) {
        diff = target - sum;
        if(typeof tracker === "undefined") {
          tracker = sum;
        } else if (Math.abs(tracker - target) > diff) {
          tracker = sum;
        }
        j++;

        while(nums[j-1] === nums[j]) {
          j++;
        }
      }
    }
  }

  return tracker;
};
