/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
//  O(nlogn)
var minSubArrayLen = function(s, nums) {
  let sum = [];
  sum[0] = nums[0];
  for(let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }

  let min = nums.length + 1;
  for(let j = 0; j < sum.length; j++) {
    // find the point where sum[end] >= sum[j-1] + s
    let end = bsearch(j, s, sum);
    if(end === sum.length) break;

    if(min > end - j + 1) {
      min = end - j + 1;
    }
  }

  if(min === nums.length + 1) return 0;
  return min;
};

// this is used to find the 1st point where value of sum el is larger than key (sum[start-1] + s)
const bsearch = function(start, s, sum) {
  let key = start === 0 ? s : s + sum[start - 1];
  let end = sum.length - 1;

  while(start <= end) {
    let mid = parseInt((start + end)/2);

    if(sum[mid] >= key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return start;
};





// O(n)
// var minSubArrayLen = function(s, nums) {
//   let i = 0;
//   let j = 0;
//   let sum = 0;
//   let min = nums.length + 1;
//
//   while(i < nums.length) {
//     sum += nums[i];
//     i++;
//
//     while(sum >= s) {
//       if(min > i - j) {
//         min = i - j;
//       }
//       sum -= nums[j];
//       j++;
//     }
//   }
//
//   if(min === nums.length + 1) return 0;
//   return min;
//
// };
