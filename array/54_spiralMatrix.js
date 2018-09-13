/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// Time: O(n * m), number of grids
// Space: )(n * m)
var spiralOrder = function(matrix) {
  let res = [];
  if(matrix.length === 0 || matrix[0].length === 0) return res;

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while(true) {
    // move right
    for(let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    if(top > bottom || left > right) break;

    // move down
    for(let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    if(top > bottom || left > right) break;

    // move left
    for(let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    if(top > bottom || left > right) break;

    // move up
    for(let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
    if(top > bottom || left > right) break;
  }

  return res;
};
