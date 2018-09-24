/**
 * @param {number[]} nums
 * @return {number}
 */
// array is non-empty and the majority element always exist in the array
// elements appear more than n/2 times, where n is the length of array
// Time: O(n)
// Space: O(n), extra map
var majorityElement = function(nums) {
  let n = nums.length;
  let map = new Map();

  for(let i = 0; i < n; i++) {
    let count = map.has(nums[i]) ? map.get(nums[i]) + 1 : 1;
    map.set(nums[i], count);
  }

  for(let key of map.keys()) {
    if(map.get(key) > parseInt(n/2)) return key;
  }
};
