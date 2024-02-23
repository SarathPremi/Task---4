// Using anonymous function
let convertToTitleCaps = (function (arr) {
  let titleCaps = arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
  console.log(titleCaps.join(" "));
})(["hello", "world", "example"]);

// Using IIFE
let titleCapsArray = (function (arr) {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
})(["hello", "world", "example"]);
console.log(titleCapsArray.join(" "));