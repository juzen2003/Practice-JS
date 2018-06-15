// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
//
// Your algorithm's runtime complexity must be in the order of O(log n).
//
// If the target is not found in the array, return [-1, -1].
//
// Example 1:
//
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
//
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // run bsearch twice to find upperbound and lowerbound
var searchRange = function(nums, target) {
    let lowerBound = bsearch(nums, target, true);
    let upperBound = bsearch(nums, target, false);
    return [lowerBound, upperBound];
};

const bsearch = function(arr, target, findLow) {
  let low = 0;
  let high = arr.length - 1;
  let res = -1;

  while(low <= high) {
    let mid = high - Math.floor((high - low) / 2);

    if(arr[mid] === target) {
      res = mid;
      if(findLow) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if(arr[mid] > target) {
      high = mid - 1;
    } else if(arr[mid] < target) {
      low = mid + 1;
    }
  }

  return res;
};
