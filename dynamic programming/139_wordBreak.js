/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.

// dp: an array to store whether if s.slice(0, i+1) can be formed from words in wordDict in dp[i], boolean
// dp[i] is True if there is a word in the dictionary that is the same as a substring of s that ends at ith index of s AND dp is also True at the beginning of the substring
// dp[i] = dp[j-1] && wordDict.includes(s.slice(j,i+1))

// ex:
// s = "leetcode"
// words = ["leet", "code"]
// d[3] is True because there is "leet" in the dictionary that ends at 3rd index of "leetcode"
// d[7] is True because there is "code" in the dictionary that ends at the 7th index of "leetcode" AND d[3] is True

// Time: O(n^2 * m), n = length of s, m = length of wordDict
var wordBreak = function(s, wordDict) {
  let len = s.length;
  let dp = [...Array(len)].fill(false);

  for(let i = 0; i < len; i++) {
    for(let j = 0; j <= i; j++) {
      let sub = s.slice(j, i+1);
      if(wordDict.includes(sub) && (j === 0 || dp[j-1])) {
        dp[i] = true;
      }
    }
  }

  return dp[len-1];
};
