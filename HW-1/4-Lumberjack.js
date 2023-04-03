//04. You are a lumberjack and you have been tasked with cutting down trees in a forest. Each tree has a certain height, and you have been given a height threshold of 10. You can only cut down trees that are taller than the threshold.
//Write a program that takes an array of tree heights and outputs the total height of the trees that you can cut down.
var lumberjack = function (arr, threshold) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > threshold) {
      sum += arr[i];
    }
  }
  return sum;
};
console.log(lumberjack([10, 10, 11, 11, 9, 8, 4, 8, 11, 17], 10));
