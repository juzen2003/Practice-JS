/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// nums has duplicated elements
var permuteUnique = function(nums) {
  let res = [];
  let set = new Set();

  // since inputs have duplicated, we sorted first for easier processing later on
  nums.sort((a, b) => a-b);
  backtracking(res, [], nums, set);
  return res;
};

const backtracking = function(res, tmp, arr, set) {
  if(tmp.length === arr.length) {
    res.push(tmp.slice());
  } else {
    for(let i = 0; i < arr.length; i++) {
      if(set.has(i)) continue;

      // both work
      // when using !set.has(i-1) => most outer loop would only run once for each group of duplicated elements (total: 1)
      // when using set.has(i-1) => most outer loop would run once for EACH single duplicated element (total: N)
      // if(i > 0 && arr[i] === arr[i-1] && set.has(i-1)) continue;
      if(i > 0 && arr[i] === arr[i-1] && !set.has(i-1)) continue;

      tmp.push(arr[i]);
      set.add(i);
      backtracking(res, tmp, arr, set);
      tmp.pop();
      set.delete(i);
    }
  }
};
