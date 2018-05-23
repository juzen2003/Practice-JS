// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
//
// Note: You may not slant the container and n is at least 2.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let area = 0;
  let current_area = 0;
  let current_height = 0;

  for(let i = 0; i < height.length; i++) {
    for(let j = i + 1; j < height.length; j++) {
      current_height = height[i] > height[j] ? height[j] : height[i];
      current_area = current_height * (j - i);
      if(current_area > area) {
          area = current_area;
      }
    }
  }

  return area;
};
