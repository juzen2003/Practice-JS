/**
 * @param {number[]} citations
 * @return {number}
 */
// If there are several possible values for h, the maximum one is taken as the h-index.
// A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each.
var hIndex = function(citations) {
  let N = citations.length;
  let low = 0;
  let high = N - 1; // citations.length - 1

  while(low <= high) {
    let mid = parseInt((low + high) / 2);

    // find the first point (mid) where citations[mid] >= N - mid;
    // finding the 1st point is to get the === case
    // OR
    // find the last point (mid) where citations[mid] < N - mid;
    // return low (mid + 1) to get the h-index from N - low
    // citations[mid]: number of citations
    // N - mid : number of papers that has at least citations[mid] citations
    if(citations[mid] < N - mid) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return N - low;
};
