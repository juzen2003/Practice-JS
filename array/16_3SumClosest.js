/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Time: O(n^2), same trick as 15
// sort is O(n log n)
// find all unique solutions
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a-b);
  let res = nums[0] + nums[1] + nums[nums.length-1];

  for(let i = 0; i < nums.length-2; i++) {
    if(nums[i] === nums[i-1]) continue;

    let j = i+1;
    let k = nums.length-1;

    while(j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if(sum > target) {
        k--;
        // while(nums[k] === nums[k+1]) k--;
      } else {
        j++;
        // while(nums[j] === nums[j-1]) j++;
      }

      if(Math.abs(target-res) > Math.abs(target-sum)) {
        res = sum;
      }
    }
  }

  return res;
};
