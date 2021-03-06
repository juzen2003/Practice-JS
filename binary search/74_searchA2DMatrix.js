/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// that means => Integers in each column are sorted in ascending from top to bottom.
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
