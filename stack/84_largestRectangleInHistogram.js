/**
 * @param {number[]} heights
 * @return {number}
 */

// Time: O(n), iterate through every bar, and every bar is pushed and popped once
var largestRectangleArea = function(heights) {
  let stack = [];
  let i = 0; // anchor
  let max = 0;

  while(i < heights.length) {
    if(stack.length === 0 || heights[i] >= heights[stack[stack.length-1]]) {
      stack.push(i);
      i++;
    } else {
      let top = stack.pop();
      let area = heights[top] * (stack.length === 0 ? i : i - 1 - stack[stack.length-1]);
      max = Math.max(max, area);
    }
  }

  while(stack.length !== 0) {
    let top = stack.pop();
    let area = heights[top] * (stack.length === 0 ? i : i - 1 - stack[stack.length-1]);
    max = Math.max(max, area);
  }

  return max;
};
