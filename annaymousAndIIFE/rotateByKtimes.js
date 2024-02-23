// Anonymous Function
let rotateArray = function (arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));

// IIFE
let rotatedArray = (function (arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
})([1, 2, 3, 4, 5], 2);
console.log(rotatedArray);
