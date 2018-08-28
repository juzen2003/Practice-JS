/**
 * @param {character[][]} matrix
 * @return {number}
 */
// use an array h to store the height from each row and use histogram max area algorithm (from 84) to get the max area
// m: row length
// n: col length
// Time: O(m * n)
var maximalRectangle = function(matrix) {
  if(matrix.length === 0) return 0;

  let rowL = matrix.length;
  let colL = matrix[0].length;
  let h = new Array(colL).fill(0);
  let max = 0;

  // h for 1st row
  for(let j = 0; j < colL; j++) {
    if(matrix[0][j] === "1") {
      h[j] = 1;
    }
  }

  for(let i = 1; i < rowL; i++) {
    max = Math.max(max, maxArea(h));

    // update h for next row
    for(let j = 0; j < colL; j++) {
      if(matrix[i][j] === "1") {
        h[j] += 1;
      } else {
        h[j] = 0;
      }
    }
  }

  // get max from last row
  max = Math.max(max, maxArea(h));

  return max;
};

const maxArea = function(heights) {
  let stack = [];
  let i = 0;
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
