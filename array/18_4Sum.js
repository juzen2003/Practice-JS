/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// Use the same logic as 15 & 16
// Find all unique quadruplets in the array which gives the sum of target
// Time: O(n^3)
var fourSum = function(nums, target) {
  nums.sort((a,b) => a - b);
  let res = [];

  for(let i = 0; i < nums.length-3; i++) {
    // avoid duplicated answers
    if(nums[i] === nums[i-1]) continue;

    let target1 = target - nums[i];

    for(let j = i+1; j < nums.length-2; j++) {
      // avoid duplicated answers
      if(nums[j] === nums[j-1] && j !== i+1) continue;

      let k = j + 1;
      let l = nums.length - 1;
      let target2 = target1 - nums[j];

      while(k < l) {
        if(nums[k] + nums[l] === target2) {
          res.push([nums[i], nums[j], nums[k], nums[l]]);
          k++;
          l--;
          while(nums[k] === nums[k-1]) k++;
          while(nums[l] === nums[l+1]) l--;
        } else if(nums[k] + nums[l] > target2) {
          l--;
        } else {
          k++;
        }
      }
    }
  }

  return res;
};
