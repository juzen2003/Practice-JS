/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// nums1 has enough space (size that is greater or equal to m + n)
var merge = function(nums1, m, nums2, n) {
  let k = m + n - 1;
  let i = m - 1;
  let j = n - 1;

  while(i >= 0 && j >= 0) {
    if(nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }

  while(j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }
};
