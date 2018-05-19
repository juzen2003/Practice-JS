// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// P   A   H   N
// A P L S I I G
// Y   I   R

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
//
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows === 1) return s;

  let resArr = new Array(numRows);
  resArr.fill("", 0, numRows);
  let cycle = numRows + (numRows - 2);

  s.split("").forEach((el, idx) => {
    // console.log(resArr);
    let newIdx = idx % cycle;
    if( newIdx < numRows) {
        resArr[newIdx] += el;
    } else {
        newIdx = cycle - newIdx;
        resArr[newIdx] += el;
    }
  });
  // console.log(resArr);
  return resArr.join("");
};
