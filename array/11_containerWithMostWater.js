/**
 * @param {number[]} height
 * @return {number}
 */
// Time: O(n)
var maxArea = function(height) {
  let max = 0;
  let i = 0;
  let j = height.length-1;

  while(i < j) {
    let area = (j - i) * Math.min(height[i], height[j]);
    max = Math.max(max, area);
    if(height[j] > height[i]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
};
