// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longest = "";
  // let longestLength = longest.length;
  let i = 0;

  while(i < s.length) {
    let res = "";

    // odd
    res = isPalindrome(s, i, i);
    if(res.length > longest.length) longest = res;
    // even
    res = isPalindrome(s, i, i+1);
    if(res.length > longest.length) longest = res;
    i += 1;
  }

  return longest;
};

// from current idx to left and right and check if there is a palindrome
const isPalindrome = function(s, left, right) {
  while(left >= 0 && right < s.length && s[left] === s[right]) {
      left -= 1;
      right += 1;
  }

  return s.slice(left+1, right);
};

let str = 'babad';
let res = longestPalindrome(str);
console.log(res);
