/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// no duplicated element in nums
// find the 1st point in nums where the value is >= target, return that point
// or find the last point in nums where the value is < target, return that point + 1
var searchInsert = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while(low <= high) {
    let mid = parseInt((low + high) / 2);

    if(nums[mid] >= target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};
// var searchInsert = function(nums, target) {
//   for(let i = 0; i < nums.length; i++) {
//     if(nums[i] >= target) {
//         return i;
//     }
//
//   }
//   // if nothing is larger than target, put it at the last
//   return nums.length;
// };
