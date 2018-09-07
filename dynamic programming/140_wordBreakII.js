/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Use map to store the array of path corresponding to string s and improve performance (get rid of LTE)

// dfs
// Time: O(n * m), n = s.length, m = wordDict.length
var wordBreak = function(s, wordDict) {
  // map to store array of path for string s
  let map = new Map();
  return getPath(s, wordDict, map);
};

const getPath = function(s, wordDict, map) {
  if(map.has(s)) return map.get(s);
  let path = [];
  if(wordDict.includes(s)) path.push(s);

  for(let i = 1; i < s.length; i++) {
    let left = s.slice(0, i);
    let right = s.slice(i);

    if(wordDict.includes(left)) {
      let rightPath = getPath(right, wordDict, map);

      for(let r of rightPath) {
        path.push(left + " " + r);
      }
    }
  }

  map.set(s, path);
  return path;
};
