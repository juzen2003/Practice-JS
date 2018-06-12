// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
//
// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
//
// The replacement must be in-place and use only constant extra memory.
//
// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
//
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let swapping = false;
  let tracker = 0;
  // from right, find the first element (tracker) that is smaller than el to its right
  for(let i = nums.length-1; i >= 0; i--) {
    if(nums[i] > nums[i-1]) {
      tracker = i-1;
      swapping = true;
      break;
    }
  }

  if(!swapping) {
    nums = nums.reverse();
  } else {

    // swap el at tracker with the first el that is larger than it at the right array
    for(let j = nums.length-1; j > tracker; j--) {
      if(nums[j] > nums[tracker]) {
        [nums[tracker], nums[j]] = [nums[j], nums[tracker]];
        break;
      }
    }

    // sort all right (everything after index: tracker+1) in ascending order
    let sortedRight = nums.slice(tracker+1).sort((a,b) => a-b);
    for(let k = 0; k < sortedRight.length; k++) {
      nums[tracker + 1 + k] = sortedRight[k];
    }
  }

};

// from right, find the first element (tracker) that is smaller than el to its right
// swap el at tracker with the first el that is larger than it at the right array
// sort all right (everything after index: tracker+1) in ascending order
