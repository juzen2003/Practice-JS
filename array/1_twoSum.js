/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time: O(n)
var twoSum = function(nums, target) {
  let map = new Map();
  for(let i = 0; i < nums.length; i++) {
    let anotherNum = target - nums[i];
    if(map.has(anotherNum)) return [map.get(anotherNum), i];
    map.set(nums[i], i);
  }
};
