/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let N = citations.length;
  let low = 0;
  let high = N - 1;

  while(low <= high) {
    let mid = parseInt((low + high) / 2);

    if(citations[mid] === N - mid) {
      return N - mid;
    } else if (citations[mid] > N - mid) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return N - low;
};
