/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // cut both nums1 & nums2 to left and right parts using i & j
  // combine left and right parts of nums1 & nums2 such that:
  // 1. length of combined left & right are the same
  // i + j === m - i + n - j + 1 or m - i + n - j
  // 2. max of combined left is less than min of combined right
  // B[j-1] <= A[i] and A[i-1] <= B[j]
  //       left_part          |        right_part
  // A[0], A[1], ..., A[i-1]  |  A[i], A[i+1], ..., A[m-1]
  // B[0], B[1], ..., B[j-1]  |  B[j], B[j+1], ..., B[n-1]

  let m = nums1.length;
  let n = nums2.length;
  let a = nums1;
  let b = nums2;

  // shorter (a) one would be splitted by i
  // longer (b) one would be splitted by j
  // we need n > m so that j is not negative
  if(m > n) {
    n = nums1.length;
    m = nums2.length;
    let temp = nums1;
    a = nums2;
    b = temp;
  }

  let iMin = 0;
  let iMax = m;

  while(iMin <= iMax) {
    let i = parseInt((iMin + iMax) / 2);
    let j = parseInt((m + n + 1) / 2) - i;

    if(i < m && j > 0 && a[i] < b[j-1]) {
        // i too small
      iMin = i + 1;
    } else if (i > 0 && j < n && a[i-1] > b[j]) {
        // i too big
      iMax = i - 1;
    } else {
      // i is correct
      let maxLeft;
      let minRight;
      if(i === 0) {
        maxLeft = b[j-1];
      } else if(j === 0) {
        maxLeft = a[i-1];
      } else {
        maxLeft = Math.max(b[j-1], a[i-1]);
      }

      if((m + n) % 2 === 1) return maxLeft;

      if(i === m) {
        minRight = b[j];
      } else if(j === n) {
        minRight = a[i];
      } else {
        minRight = Math.min(b[j], a[i]);
      }

      return (minRight + maxLeft) / 2;
    }
  }

};
