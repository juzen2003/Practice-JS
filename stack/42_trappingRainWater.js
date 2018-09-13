/**
 * @param {number[]} height
 * @return {number}
 */
 // The main idea is : if we want to find out how much water on a bar(bot), we need to find out the left larger bar's index (il), and right larger bar's index(ir), so that the water is (min(A[il],A[ir])-A[bot])*(ir-il-1), use min since only the lower boundary can hold water, and we also need to handle the edge case that there is no il.
 //
 // To implement this we use a stack that store the indices with decreasing bar height, once we find a bar who's height is larger, then let the top of the stack be bot, the cur bar is ir, and the previous bar is il.

// Time: O(n)
// Space: O(n), stack to store idx of left border
var trap = function(height) {
  let maxWater = 0;
  let stack = [];
  let i = 0;

  while(i < height.length) {
    if(stack.length === 0 || height[i] <= height[stack[stack.length-1]]) {
      stack.push(i);
      i++;
    } else {
      let bot = stack.pop();
      if(stack.length) {
        let minHeight = Math.min(height[i], height[stack[stack.length-1]]);
        let water = (minHeight - height[bot]) * (i - stack[stack.length-1] - 1);
        maxWater += water;
      }
    }
  }

  return maxWater;
};
