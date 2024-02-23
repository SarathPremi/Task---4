// Anonymous Function
let findMedianSortedArrays = function (nums1, nums2) {
  let merged = nums1.concat(nums2).sort((a, b) => a - b);
  let mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
};
console.log(findMedianSortedArrays([1, 3], [2, 4]));

// IIFE
let median = (function (nums1, nums2) {
  let merged = nums1.concat(nums2).sort((a, b) => a - b);
  let mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
})([1, 3], [2, 4]);
console.log(median);
