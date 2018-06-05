// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note:
//
// The solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // sort it first
  nums = nums.sort((a,b) => a-b);
  // console.log(nums);
  let res = [];

  for(let i = 0; i < nums.length-2; i++) {

    if(nums[i] > 0) {
      break;
    }
    if(nums[i] === nums[i-1]) {
      continue;
    }

    for(let j=i+1, k = nums.length-1; j < k;) {
      let sum = nums[i] + nums[j] + nums[k];
      if(sum === 0) {
        // console.log("k: ", k);
        // console.log("j: ", j);
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        // j goes from front to back
        while(nums[j] === nums[j-1] && j < k) {
          j++;

        }
        // k goes from back to front
        while(nums[k] === nums[k+1] && j < k) {
          k--;

        }
      } else if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      }

    }
  }

  return res;
};
