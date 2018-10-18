/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// only 1 ~ 9 are allowed to form n
// same number can't be re-used
// All numbers will be positive integers.
// The solution set must not contain duplicate combinations.
// Time: O(n ^ 3)
// wc: n * (1 + 2 + ...n-1) => n * n * (n-1) / 2 => n * (n^2) => n ^ 3
var combinationSum3 = function(k, n) {
  let res = [];
  let nums = [...Array(9)].map((el, idx) => idx + 1);
  backtracking(res, [], nums, n, 0, k);
  return res;
};

const backtracking = function(res, tmp, arr, remain, start, k) {
  if(remain < 0) {
    return;
  } else if(remain === 0 && tmp.length === k) {
    res.push(tmp.slice());
    // return can be ignored
    return;
  } else {
    for(let i = start; i < arr.length; i++) {
      // Using the following would reduce the number of operations (instead of just tmp.push(arr[i]))
      // if(tmp.length < k) {
      //     tmp.push(arr[i]);
      // } else {
      //     return;
      // }
      tmp.push(arr[i]);
      backtracking(res, tmp, arr, remain-arr[i], i+1, k);
      tmp.pop();
    }
  }
};
