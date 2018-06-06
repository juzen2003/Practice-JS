// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
//
// Note:
//
// The solution set must not contain duplicate quadruplets.
//
// Example:
//
// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
//
// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let res = [];

  nums.sort(function(a,b) {return a-b;});

  for(let i = 0; i < nums.length-1; i++) {
    while(nums[i] === nums[i-1] && i !== 0) {
      i++;
    }
    
    let target1 = target - nums[i];

    for(let j = i+1; j < nums.length; j++) {
      while(nums[j] === nums[j-1] && j !== i+1) {
          j++;
      }

      let target2 = target1 - nums[j];
      let front = j+1;
      let end = nums.length - 1;

      while(front < end) {
        let sum = nums[front] + nums[end];

        if(sum === target2) {
          res.push([nums[i], nums[j], nums[front], nums[end]]);
          front++;
          end--;

          while(front < end && nums[end+1] === nums[end]) {
              end--;
          }

          while(front < end && nums[front-1] === nums[front]) {
              front++;
          }

        } else if(sum > target2) {
          end--;
        } else if(sum < target2) {
          front++;
        }
      }
    }
  }

  return res;
};
