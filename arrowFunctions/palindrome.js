let findPalindromes = (arr) => {
  return arr.filter((str) => str === str.split("").reverse().join(""));
};
console.log(findPalindromes(["radar", "hello", "level"]));