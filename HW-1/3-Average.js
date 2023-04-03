//03. Write a program that takes an array of integers and returns the average of all the numbers in the array.
var average = function (arr) {
  let sum = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    sum += arr[i];
  }
  return sum / len;
};
console.log(average([20, 10, 10, 20]));
