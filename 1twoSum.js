// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function(nums, target) {
  // for(let i = 0; i < nums.length; i++) {
  //     let anotherNum = target - nums[i];
  //     if (!nums.slice(i+1).includes(anotherNum)) {
  //         continue;
  //     } else {
  //         return [i, nums.slice(i+1).indexOf(anotherNum)+i+1];
  //     }
  // }
  let hsh = {};
  for(let i = 0; i < nums.length; i++) {
    let anotherNum = target - nums[i];
    if(hsh[anotherNum] !== undefined) return [hsh[anotherNum],i];
    hsh[nums[i]] = i;
  }

};

// [2,7,11,15]
// 9
let n1 = [2,7,11,15];
let t1 = 9;
// let n1 = [3,3,11,15];
// let t1 = 6;
console.log(twoSum(n1,t1));
