// Write a function, longest_common_substring(str1, str2) that takes two strings and returns the longest common substring. A substring is defined as any consecutive slice of letters from another string.
//
// Bonus: solve it in O(m * n) using O(m * n) extra space. (Hint: the solution involves dynamic programming which will be introduced later in the course.)

const longestCommonSubstring = function(str1, str2) {
  let longestSub = "";
  let startIdx = 0;
  while(startIdx < str1.length) {

    let subLength = longestSub.length + 1;
    while(startIdx + subLength <= str1.length) {
      let endIdx = startIdx + subLength;
      let subStr = str1.slice(startIdx, endIdx);
      if(str2.includes(subStr)) {
        if(longestSub.length < subStr.length) {
          longestSub = subStr;
        }
      }
      subLength += 1;
    }

    startIdx += 1;
  }

  return longestSub;
};

let str1 = "abcde";
let str2 = "ghabcdegg";
let res = longestCommonSubstring(str1, str2);
console.log(res);
