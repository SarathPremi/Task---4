// Using anonymous function
let arr = [1, 2, 3, 4, 5];
let res = 0;
let sum1 = function (arr) {
  for (ind = 0; ind < arr.length; ind++) {
    res = res + arr[ind];
  }
  return res;
};

console.log(sum1(arr));

// Using IIFE
let sum2 = (function (arr) {
  let res1 = arr.reduce((acc, curr) => acc + curr, 0);
  return res1;
})([1, 2, 3, 4, 5]);
console.log(sum2);