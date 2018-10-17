/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Time: O(n)
// Space: O(n), extra map
var majorityElement = function(nums) {
  let map = new Map();
  let res = [];
  let k = parseInt(nums.length/3);

  for(let i = 0; i < nums.length; i++) {
    let count = map.get(nums[i]) === undefined ? 1 : map.get(nums[i]) + 1;
    map.set(nums[i], count);
  }

  for(let key of map.keys()) {
    if(map.get(key) > k) res.push(key);
  }

  return res;
};
