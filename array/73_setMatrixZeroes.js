/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// Space: O(1), in place
// Time: O(n)

// store 0 at first row and col if that row & col should be all 0 later
// deal with first row and first col later
var setZeroes = function(matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  let firstRow = false;
  let firstCol = false;

  for(let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++) {
      if(matrix[i][j] === 0) {
        if(i === 0) firstRow = true;
        if(j === 0) firstCol = true;
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for(let i = 1; i < row; i++) {
    for(let j = 1; j < col; j++) {
      if(matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if(firstRow) {
    for(let j = 0; j < col; j++) {
      matrix[0][j] = 0;
    }
  }

  if(firstCol) {
    for(let i = 0; i < row; i++) {
      matrix[i][0] = 0;
    }
  }
};
