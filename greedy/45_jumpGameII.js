/**
 * @param {number[]} nums
 * @return {number}
 */
// The main idea is based on greedy. Let's say the range of the current jump is [curBegin, curEnd], curFarthest is the farthest point that all points in [curBegin, curEnd] can reach. Once the current point reaches curEnd, then trigger another jump, and set the new curEnd with curFarthest, then keep the above steps, as the following:

// 1. the current region of the current jump is [currentStart, currentEnd], and currentFarthest is the farthest point we can reach from current region
// 2. Once current point reaches currentEnd in the current region, jumpCount++, and we move to the next region and set currentEnd to the currentFarthest we got from previous region
// 3. continue above steps until our currentEnd is larger or equal to the last point of nums

// You can assume that you can always reach the last index.
// Time: O(n)

var jump = function(nums) {
  let currentEnd = 0;
  let jumpCount = 0;
  let currentFarthest = 0;

  for(let i = 0; i < nums.length-1; i++) {
    // get the currentFarthest point we can reach in current region, this is used to update the currentEnd for the next region later
    currentFarthest = Math.max(currentFarthest, i + nums[i]);
    if(i === currentEnd) {
      jumpCount++;
      currentEnd = currentFarthest;
      if(currentEnd >= nums.length-1) break;
    }
  }

  return jumpCount;
};
