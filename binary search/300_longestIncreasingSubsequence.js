/**
 * @param {number[]} nums
 * @return {number}
 */
// O(nlogn)
// tails is an array storing the smallest tail of all increasing subsequences with length i+1 in tails[i]
// (1) if x is larger than all tails, append it, increase the size by 1
// (2) if tails[i-1] < x <= tails[i], update tails[i]
var lengthOfLIS = function(nums) {
  let tail = [];
  let size = 0;

  for(let i = 0; i < nums.length; i++) {
    // low
    let j = 0;
    // high, tail.length
    let k = size;
    let key = nums[i];
    // bsearch to look for the last point at tail where that value is less than key
    while(j <= k) {
      let mid = parseInt((j+k)/2);
      if(tail[mid] < key) {
        j = mid + 1;
      } else {
        k = mid - 1;
      }
    }

    tail[j] = key;
    if(j === size) size++;
  }

  return tail.length;
};


// more organized
// var lengthOfLIS = function(nums) {
//   let tail = [];
//   let size = 0;
//
//   for(let i = 0; i < nums.length; i++){
//     let k = 0;
//     let j = size;
//     let key = nums[i];
//
//     let point = bsearch(k, j, key, tail);
//     tail[point] = key;
//     if(point === size) size++;
//   }
//
//   return tail.length;
// };
//
// const bsearch = function(start, end, key, arr) {
//   while(start <= end) {
//     let mid = parseInt((start + end)/2);
//     if(arr[mid] < key) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//
//   return start;
// };


// O(n^2)
// var lengthOfLIS = function(nums) {
//   if(nums.length === 0) return 0;
//
//   let res = 1;
//   let dp = new Array(nums.length).fill(1);
//
//   for(let i = 1; i < nums.length; i++) {
//     for(let j = 0; j < i; j++) {
//       if(nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//
//     res = Math.max(dp[i], res);
//   }
//
//   return res;
// };
