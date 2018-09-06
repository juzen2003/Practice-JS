/**
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(n)
// dp: an array store the max sum up to idx i in nums in dp[i]
var maxSubArray = function(nums) {
  let dp = [...Array(nums.length)];
  let max = Number.MIN_SAFE_INTEGER;

  for(let i = 0; i < nums.length; i++) {
    if(i === 0) {
      dp[i] = nums[i];
      max = Math.max(max, dp[i]);
    } else {
      // beware of negative values
      dp[i] = Math.max(nums[i], nums[i] + dp[i-1]);
      max = Math.max(max, dp[i]);
    }
  }

  return max;
};

// divide and conquer
// Time: O(logn)
var maxSubArray = function(nums) {
  if(!nums) return 0;
  return maxSub(nums, 0, nums.length-1);
};

// 1. select the middle element, max subarray can either contain middle element or not
// 2. if middle element is not included, the the answer is on either left or right half after we applied the same algorithm
// 3. if middle element is included, the answer would be middle element + left max + right max
// 4. return the max answer from 2 & 3
const maxSub = function(arr, left, right) {
  if(left === right) return arr[left];

  let mid = parseInt((left + right)/2);
  let leftAns = maxSub(arr, left, mid);
  let rightAns = maxSub(arr, mid+1, right);

  let leftMax = arr[mid];
  let tmp = 0;
  for(let i = mid; i >= left; i--) {
    tmp += arr[i];
    if(tmp > leftMax) leftMax = tmp;
  }

  let rightMax = arr[mid+1];
  tmp = 0;
  for(let i = mid+1; i <= right; i++) {
    tmp += arr[i];
    if(tmp > rightMax) rightMax = tmp;
  }

  return Math.max(Math.max(leftAns, rightAns), leftMax + rightMax);
};
