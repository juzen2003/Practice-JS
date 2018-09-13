/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// clockwise, 90 degree
// reverse matrix from top to down
// swap matrix[i][j] with matrix[j][i], swap symmetry
// Time: O(n^2)
// Space: O(1), in-place
var rotate = function(matrix) {
  matrix.reverse();
  for(let i = 0; i < matrix.length; i++) {
    for(let j = i+1; j < matrix[0].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};

// counter clockwise, -90 degree
// swap matrix[i][j] with matrix[j][i], swap symmetry
// reverse matrix from top to down
var antiRotate = function(matrix) {
  for(let i = 0; i < matrix.length; i++) {
    for(let j = i + 1; j < matrix[0].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  matrix.reverse();
};
