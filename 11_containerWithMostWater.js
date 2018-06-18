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
