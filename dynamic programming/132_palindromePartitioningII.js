/**
 * @param {string} s
 * @return {number}
 */
//
// a   b   a   |   c  c
//                 j  i
//        j-1  |  [j, i] is palindrome
//    cut(j-1) +  1
//
// 1. cut[i] is the minimum of cut[j - 1] + 1 (where j <= i, we found the minimum cut[j-1] + 1), if [j, i] is palindrome
// 2. If [j, i] is palindrome, [j + 1, i - 1] is palindrome, and c[j] == c[i]

// cut: an array to store minimum cut to have characters up to idx i having palidrome for each substring
// pal: a 2D array to store if s.slice(j, i+1) is a palindrome in pal[j][i] (boolean)

var minCut = function(s) {
  let len = s.length;
  let cut = [...Array(len)];
  let pal = [...Array(len)].map(el => Array(len));

  for(let i = 0; i < len; i++) {
    // init min to be the largest possible cut (for s.slice(0, i+1)) => i, or init it with any big nums like len would work as well
    let min = i;
    for(let j = 0; j <= i; j++) {
      if(s[j] === s[i] && (j + 1 > i - 1 || pal[j+1][i-1])) {
        pal[j][i] = true;
        min = j === 0 ? 0 : Math.min(min, cut[j-1] + 1);
      }
    }

    cut[i] = min;
  }

  return cut[len-1];
};
