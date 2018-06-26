/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
//  O(logn)
var minSubArrayLen = function(s, nums) {
  let sums = [];
  sums[0] = nums[0];
  for(let i = 1; i < nums.length; i++) {
    sums[i] = sums[i-1] + nums[i];
  }


  let end = 0;
  let minLen = nums.length + 1;
  console.log(sums);
  for(let j = 0; j < nums.length - 1; j ++) {

    end = bsearch(j, s, sums);
    // console.log(end);
    if(end === sums.length) break;
    if(minLen > end - j + 1) {
        minLen = end - j + 1;
    }
  }
  if(minLen === nums.length + 1) return 0;
  return minLen;
};

const bsearch = function(low, s, sums) {
  let value = low === 0 ? s : sums[low-1] + s;
  let high = sums.length - 1;

  while(low <= high) {
    let mid = parseInt((low + high) / 2); // low + (high - low) / 2

    // look for first location where sum of subarray is > s
    if(sums[mid] >= value) {
        high = mid - 1;
    } else {
        low = mid + 1;
    }
  }

  return low;
};

// // O(n)
// var minSubArrayLen = function(s, nums) {
//     let i = 0;
//     let j = 0;
//     let sum = 0;
//     let minLen = nums.length + 1;

//     while(i < nums.length) {
//         sum += nums[i];
//         i += 1;

//         while(sum >= s) {
//             if(minLen > i - j) {
//                 minLen = i - j;
//             }
//             // console.log(sum);
//             // console.log(minLen);
//             sum -= nums[j];
//             j += 1;
//         }

//     }
//     if(minLen === nums.length + 1) return 0
//     return minLen;
// };
