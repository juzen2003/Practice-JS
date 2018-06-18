/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // sort it first
  nums = nums.sort((a,b) => a-b);
  // console.log(nums);
  let res = [];

  for(let i = 0; i < nums.length-2; i++) {

    if(nums[i] > 0) {
      break;
    }
    if(nums[i] === nums[i-1]) {
      continue;
    }

    for(let j=i+1, k = nums.length-1; j < k;) {
      let sum = nums[i] + nums[j] + nums[k];
      if(sum === 0) {
        // console.log("k: ", k);
        // console.log("j: ", j);
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        // j goes from front to back
        while(nums[j] === nums[j-1] && j < k) {
          j++;

        }
        // k goes from back to front
        while(nums[k] === nums[k+1] && j < k) {
          k--;

        }
      } else if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      }

    }
  }

  return res;
};
