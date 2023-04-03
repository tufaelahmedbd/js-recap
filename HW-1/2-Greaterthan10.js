//02. Write a program that takes an array of integers and returns the sum of all the numbers in the array that are greater than 10.
var gratherThanTen = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      sum += arr[i];
    }
  }
  return sum;
};
console.log(gratherThanTen([3, 10, 15, 20]));
