// Using anonymous function
let printOdd = (function (arr) {
  let odd = [];
  for (ind = 0; ind < arr.length; ind++) {
    if (arr[ind] % 2 !== 0) {
      odd.push(arr[ind]);
    }
  }
  console.log(odd.join(" "));
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Using IIFE
(function (arr) {
  let odd = [];
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      odd.push(num);
    }
  });
  console.log(odd.join(" "));
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);
