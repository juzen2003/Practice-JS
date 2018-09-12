/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 1. from right, find the first element (tracker) that is smaller than el to its right
// 2. from right, swap el at tracker with the first el that is larger than the tracker el at the right array
// 3. sort all right (everything after index: tracker+1) in ascending order, or just reverse it would work because right array is still in descending order after step 2

var nextPermutation = function(nums) {
  let len = nums.length;
  let tracker = -1;

  for(let i = len-1; i >= 0; i--) {
    if(nums[i] > nums[i-1]) {
      tracker = i - 1;
      break;
    }
  }

  if(tracker < 0) {
    nums.reverse();
  } else {
    for(let i = len-1; i >= 0; i--) {
      if(nums[i] > nums[tracker]) {
        [nums[i], nums[tracker]] = [nums[tracker], nums[i]];
        break;
      }
    }

    let j = tracker + 1;
    let k = len - 1;
    while(j < k) {
      [nums[j], nums[k]] = [nums[k], nums[j]];
      j++;
      k--;
    }
  }

};
