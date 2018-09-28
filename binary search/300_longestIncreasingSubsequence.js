/**
 * @param {number[]} nums
 * @return {number}
 */
// O(nlogn): loop through all nums (O(n)) + perform bsearch to find the point for insertion (O(logn))
// tails is an array storing the smallest tail of all increasing subsequences with length i+1 in tails[i]
// el in tail would be increasing
// (1) if x is larger than all tails, append it, increase the size of tails by 1
// (2) if tails[i-1] < x <= tails[i], update tails[i]
var lengthOfLIS = function(nums) {
  let tail = [];

  for(let i = 0; i < nums.length; i++) {
    // low
    let j = 0;
    // high, tail.length-1
    let k = tail.length - 1;
    let key = nums[i];
    // bsearch to look for the last point at tail where that el is less than key and insert key to the index after it.
    // bsearch to look for the last point at tail where tail[mid] < key, return point + 1
    while(j <= k) {
      let mid = parseInt((j+k)/2);
      if(tail[mid] < key) {
        j = mid + 1;
      } else {
        k = mid - 1;
      }
    }
    // if can't find anything j will be tails.length
    tail[j] = key;
  }

  return tail.length;
};

// O(n^2)
// dp: an array store the longest increasing subarray up to idx i in dp[i]
var lengthOfLIS = function(nums) {
  if(nums.length === 0) return 0;

  let res = 1;
  let dp = new Array(nums.length).fill(1);

  for(let i = 1; i < nums.length; i++) {
    for(let j = 0; j < i; j++) {
      if(nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    res = Math.max(dp[i], res);
  }

  return res;
};
