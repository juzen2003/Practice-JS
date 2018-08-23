/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
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

// check first element in each row first and do bsearch in the targeted row
// var searchMatrix = function(matrix, target) {
//     if(matrix.length === 0) return false;
//
//     let row = 0;
//     for(let i = 0; i < matrix.length; i++) {
//         if(matrix[i][0] > target) {
//             row = i - 1;
//             break;
//         } else if(matrix[i][0] === target) {
//             return true;
//         } else if(i === matrix.length - 1) {
//             row = i;
//             break;
//         }
//     }
//
//     if(row < 0) return false;
//     let arr = matrix[row];
//
//     let low = 0;
//     let high = arr.length - 1;
//
//     while(low <= high) {
//         let mid = parseInt((low + high) / 2);
//         if(arr[mid] === target) {
//             return true;
//         } else if(arr[mid] > target) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//
//     return false;
// };
