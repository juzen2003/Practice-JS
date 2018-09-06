/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// String, recursion
// worst case: Time: O(4^n)
var isScramble = function(s1, s2) {
  // base case
  if(s1.length !== s2.length) return false;
  if(s1 === s2) return true;

  let m = s1.length;
  let count = new Array(26).fill(0);

  // checking if all letters in s1 are also in s2; otherwise return false
  for(let i = 0; i < m; i++) {
    count[s1[i].charCodeAt(0) - 97]++;
    count[s2[i].charCodeAt(0) - 97]--;
  }

  for(let i = 0; i < 26; i++) {
    if(count[i] !== 0) return false;
  }

  // cut: i from 1 ~ m to make sure all the slice substring are not empty string
  for(let i = 1; i < m; i++) {
    if(isScramble(s1.slice(0,i), s2.slice(0,i)) && isScramble(s1.slice(i), s2.slice(i))) {
      return true;
    }

    if(isScramble(s1.slice(0,i), s2.slice(s2.length-i)) && isScramble(s1.slice(i), s2.slice(0, s2.length-i))) {
      return true;
    }
  }

  return false;
};

// DP
 /**
 		 * Let dp[i][j][k] = whether the substring s1.slice(i, i+k) is a scramble of s2.slice(j, j+k) or not
 		 * Since each of these substrings is a potential node in the tree, we need to check for all possible cuts.
 		 * Let q be the length of a cut (hence, q < k), then we are in the following situation:
 		 *
     idx:
 		 * S1 [   x1      |         x2         ]
 		 *    i         i + q - 1              i + k - 1

     * x1: s1.slice(i, i+q)
     * x2: s1.slice(i+q)

 		 * here we have two possibilities:
 		 *
 		 * S2 [   y1      |         y2         ]
 		 *    j         j + q - 1              j + k - 1

     * y1: s2.slice(j, j+q)
     * y2: s2.slice(j+q)

 		 * or
 		 *
 		 * S2 [       y1        |     y2       ]
 		 *    j                 j + k - q - 1  j + k - 1

     * y1: s2.slice(j, j+k-q)
     * y2: s2.slice(j+k-q)

 		 * which in terms of dp means:
 		 *
 		 * dp[i][j][k] = for some 1 <= q < k we have:
       dp[i][j][q] AND dp[i+q][j+q][k-q] OR dp[i][j+k-q][q] AND dp[i+q][j][k-q]

 		 * Base case is k = 1, where we simply need to check for S1[i] and S2[j] to be equal
* */

// dp: a 3D array to store boolean
// dp[i][j][k]: whether the s1.slice(i, i+k) & s2.slice(j, j+k) are scramble
// Time: O(n^4)

var isScramble = function(s1, s2) {
  if(s1.length !== s2.length) return false;
  let m = s1.length;

  // 3D array
  let dp = [...Array(m)].map(el1 => [...Array(m)].map(el2 => Array(m+1)));

  for(let k = 1; k <= m; k++) {
    for(let i = 0; i + k <= m; i++) {
      for(let j = 0; j + k <= m; j++) {
        if(k === 1) {
          dp[i][j][k] = s1[i] === s2[j];
        } else {
          // Since each of these substrings is a potential node in the tree, we need to check for all possible cuts (q)
          // condition !dp[i][j][k] is when we found that both substring are scamble then we don't need to keep looping through q
          for(let q = 1; q < k && !dp[i][j][k]; q++) {
            dp[i][j][k] = (dp[i][j][q] && dp[i+q][j+q][k-q]) || (dp[i][j+k-q][q] && dp[i+q][j][k-q]);
          }
        }
      }
    }
  }

  return dp[0][0][m];
};
