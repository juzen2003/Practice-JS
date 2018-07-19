/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
   let low = 0;
   let high = nums.length - 1;

   while(low <= high) {
     let mid = parseInt((low + high) / 2);

     // find the last point (mid) where this condition met, and retur low (mid + 1)
     if(nums[mid] < nums[mid + 1]) {
       low = mid + 1;
     } else {
       high = mid - 1;
     }
   }

   return low;
 };


// var findPeakElement = function(nums) {
//   if(nums.length === 1) return 0;
//
//   let low = 0;
//   let high = nums.length-1;
//
//   // always meet the following requrement:
//   // nums[low - 1] < nums[low] && nums[high] > nums[high + 1]
//
//   while(low < high) {
//     let mid = Math.floor((high + low) / 2);
//
//     // right part has a peak
//     if(nums[mid] < nums[mid + 1]) {
//       low = mid + 1;
//     } else {
//     // left part has a peak
//       high = mid;
//     }
//   }
//
//   // when exit out the while loop (low === high), we know that low is the peak because: nums[low - 1] < nums[low] && nums[high] > nums[high + 1]
//   return low;
// };
