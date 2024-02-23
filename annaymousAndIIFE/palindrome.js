// Using anonymous function
let arr = ["madam", "hello", "level", "world"];
let pal = [];
let palindromes = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let isPal = true;
    if (
      arr[i].toLowerCase() === arr[i].toLowerCase().split("").reverse().join("")
    ) {
      pal.push(arr[i]);
    } else {
      isPal = false;
    }
  }
};
palindromes(arr);
console.log(pal.join(" "));

// Using IIFE
let palindromeArray = (function (arr) {
  return arr.filter(
    (word) =>
      word.toLowerCase() === word.toLowerCase().split("").reverse().join("")
  );
})(["madam", "hello", "level", "world"]);
console.log(palindromeArray.join(" "));
