// Using anonymous function
let arr = [2, 3, 4, 5, 6, 7, 8, 9];
let prime = [];

let primeNumbers = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let isPrime = true;
    if (arr[i] <= 1) {
      isPrime = false;
    } else {
      for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
        if (arr[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      prime.push(arr[i]);
    }
  }
};

primeNumbers(arr);
console.log(prime.join(" "));

// Using IIFE
let primes = (function (arr) {
  return arr.filter((num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
})([2, 3, 4, 5, 6, 7, 8, 9]);
console.log(primes.join(" "));