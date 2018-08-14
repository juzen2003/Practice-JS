/**
 * @param {string} s
 * @return {string}
 */
// Time: O(n^2)
// Space: O(1)
var longestPalindrome = function(s) {
  if(s.length < 2) return s;

  let longest = "";
  let i = 0;

  while(i < s.length) {
    let res = "";
    // palindrome with odd length
    res = getPalindrome(s, i, i);
    longest = res.length > longest.length ? res : longest;
    // palindrome with even length
    res = getPalindrome(s, i, i+1);
    longest = res.length > longest.length ? res : longest;

    i++;
  }

  return longest;
};

// from current idx to left and right and get the longest palindrome
const getPalindrome = function(s, left, right) {
  while(left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return s.slice(left+1, right);
};
