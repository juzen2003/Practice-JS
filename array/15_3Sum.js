/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 1. sort the list
// 2. loop thorugh each element and see if it can be the first el
// 3. once we got the 1st el, we do two sum and found all possible two sum

// find all unique solutions
// Time: O(n^2)
var threeSum = function(nums) {
  nums.sort((a,b) => a-b);
  let res = [];

  for(let i = 0; i < nums.length-2; i++) {
    if(nums[i] > 0) break;
    // avoid duplicated answers
    if(nums[i] === nums[i-1]) continue;

    let j = i + 1;
    let k = nums.length - 1;
    let target = -nums[i];

    while(j < k) {
      if(nums[j] + nums[k] === target) {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while(nums[j] === nums[j-1]) j++;
        while(nums[k] === nums[k+1]) k--;
      } else if(nums[j] + nums[k] > target) {
        k--;
      } else {
        j++;
      }
    }
  }

  return res;
};
