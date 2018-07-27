/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 // log(m + n)

// cut both nums1 & nums2 to left and right parts using i & j
// combine left and right parts of nums1 & nums2 such that:
// 1. length of combined left & right are the same
// i + j === m - i + n - j + 1 (left has one more when it's odd) or m - i + n - j (right has one more when it's odd)
// 2. max of combined left is less than min of combined right
// B[j-1] <= A[i] and A[i-1] <= B[j]
//       left_part          |        right_part
// A[0], A[1], ..., A[i-1]  |  A[i], A[i+1], ..., A[m-1]
// B[0], B[1], ..., B[j-1]  |  B[j], B[j+1], ..., B[n-1]

// in general, meet the following two conditions:
// (1) i + j == m - i + n - j (or: m - i + n - j + 1, left has one more if it's odd)
//     if n >= m, we just need to set: i = 0 ~ m, j = (m + n + 1)/2 - i
// (2) B[j-1] <= A[i] and A[i-1] <= B[j]
var findMedianSortedArrays = function(nums1, nums2) {
  let a = nums1;
  let b = nums2;
  let m = a.length;
  let n = b.length;

  // shorter (a) one would be splitted by i
  // longer (b) one would be splitted by j
  // we need n > m so that j is not negative from (m + n + 1)/2 - i
  if(m > n) {
    let tmp = nums1;
    a = nums2;
    b = tmp;
    m = a.length;
    n = b.length;
  }

  // i: from 0 to m, i + j = m - i + n - j + 1
  let low = 0;
  let high = m;

  while(low <= high) {
    let i = parseInt((low + high)/2);
    let j = parseInt((m + n + 1)/2) - i;

    if(i > 0 && j < n && a[i-1] > b[j]) {
      // i is too big
      high = i - 1;
    } else if(i < m && j > 0 && a[i] < b[j-1]) {
      // i is too small
      low = i + 1;
    } else {
      // i is correct
      let maxLeft;
      let minRight;

      if(j === 0) {
        maxLeft = a[i-1];
      } else if(i === 0) {
        maxLeft = b[j-1];
      } else {
        maxLeft = Math.max(a[i-1], b[j-1]);
      }

      // we use j = (m + n + 1)/2 - i, when n + m is odd, the left would have odd elements
      if((m + n) % 2 === 1) return maxLeft;

      if(j === n) {
        minRight = a[i];
      } else if(i === m) {
        minRight = b[j];
      } else {
        minRight = Math.min(a[i], b[j]);
      }

      // if we use j = (m + n)/2 - i, when n + m is odd, the right would have odd elements
      // if((m + n) % 2 === 1) return minRight;

      return (maxLeft + minRight)/2;
    }
  }
};
