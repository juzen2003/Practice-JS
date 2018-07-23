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
    let mid = parseInt((low + high)/2);

    if(arr[mid] === target) {
      res = mid;

      if(findLow) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if(arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return res;
};
