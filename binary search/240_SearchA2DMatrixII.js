/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//  O(m + n)
// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
var searchMatrix = function(matrix, target) {
  if(matrix.length === 0) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while(col >= 0 && row <= matrix.length - 1) {
    if(matrix[row][col] === target) {
      return true;
    } else if(matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
};
