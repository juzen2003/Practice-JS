/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longestSub = 0;
  // use cache to keep track of longest substring
  let cache = [];
  s.split("").forEach((el,idx) => {
    if(!cache.includes(el)) {
        cache.push(el);
    } else {
        if(cache.length > longestSub) longestSub = cache.length;

        // update cache when a duplicated char happened
        let i = cache.indexOf(el);
        cache = cache.slice(i+1);
        cache.push(el);
    }
  });

  if(cache.length > longestSub) longestSub = cache.length;

  return longestSub;
};
