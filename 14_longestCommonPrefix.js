// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
//
// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:
//
// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let res = "";
  if(strs.length === 0) return res;

  let i = 0;
  let firstStr = strs[0];
  // console.log(firstStr);

  while(i < firstStr.length) {
    for(let j = 1; j < strs.length; j++) {
      if(strs[j].slice(0, i+1) !== firstStr.slice(0, i+1)) {
        return res;
      }
    }
    res = firstStr.slice(0, i+1);
    i++;
  }

  return res;
};
