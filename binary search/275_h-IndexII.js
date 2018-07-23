/**
 * @param {number[]} citations
 * @return {number}
 */
// If there are several possible values for h, the maximum one is taken as the h-index.
var hIndex = function(citations) {
  let N = citations.length;
  let low = 0;
  let high = N - 1;

  while(low <= high) {
    let mid = parseInt((low + high) / 2);

    // find the first point (mid) where citations[mid] >= N - mid;
    // finding the 1st point is to get the === case
    if(citations[mid] >= N - mid) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    // if(citations[mid] === N - mid) {
    //   return N - mid;
    // } else if (citations[mid] > N - mid) {
    //   high = mid - 1;
    // } else {
    //   low = mid + 1;
    // }
  }

  return N - low;
};
