/**
 * @param {number[]} nums
 * @return {number}
 */
// nums is not sorted
// 1. put all nums in a set
// 2. loop through each num in nums
//   - check left & right of current num and see if they are in set
//   - if so, increment the length
//   - else, go to next num
// 3. keep updating the max length of consecutive elements

// Time: O(n)
var longestConsecutive = function(nums) {
  let numSet = new Set(nums);
  let max = 0;

  for(let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let count = 1;

    // check left of currentNum
    while(numSet.has(currentNum-1)) {
      numSet.delete(currentNum-1);
      currentNum--;
      count++;
    }

    currentNum = nums[i];
    //check right of currentNum
    while(numSet.has(currentNum+1)) {
      numSet.delete(currentNum+1);
      currentNum++;
      count++;
    }

    max = Math.max(max, count);
  }

  return max;
};
